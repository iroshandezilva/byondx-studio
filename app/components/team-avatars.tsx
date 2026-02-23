"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  color: string;
  linkedin?: string;
  twitter?: string;
};

const team: TeamMember[] = [
  {
    name: "Iroshan Dezilva",
    role: "Design Lead",
    avatar: "/images/photos/iroshan.png",
    initials: "ID",
    color: "#E8F0E8",
    linkedin: "https://linkedin.com/in/iroshan",
    twitter: "https://twitter.com/iroshan",
  },
  {
    name: "Team Member",
    role: "Senior Designer",
    initials: "TM",
    color: "#E8E8F0",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Team Member",
    role: "UI Designer",
    initials: "TM",
    color: "#F0E8E8",
    linkedin: "#",
    twitter: "#",
  },
];

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Avatar({ member, zIndex }: { member: TeamMember; zIndex: number }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = () => {
    clearTimeout(leaveTimer.current);
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({ x: rect.left + rect.width / 2, y: rect.top });
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setOpen(false), 100);
  };

  const tooltip = (
    <AnimatePresence>
      {open && (
        <div
          onMouseEnter={() => clearTimeout(leaveTimer.current)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            transform: "translateX(-50%) translateY(calc(-100% - 12px))",
            zIndex: 9999,
            pointerEvents: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.12),0px_1px_4px_rgba(0,0,0,0.06)] ring-[1px] ring-black/6 px-3 py-2.5 min-w-[140px] flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] font-semibold text-black tracking-[-0.3px] whitespace-nowrap">
                  {member.name}
                </span>
                <span className="text-[11px] text-black/40 tracking-[-0.2px] whitespace-nowrap">
                  {member.role}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-medium text-black/50 hover:text-[#0A66C2] transition-colors px-2 py-1 rounded-md hover:bg-[#0A66C2]/8"
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-medium text-black/50 hover:text-black transition-colors px-2 py-1 rounded-md hover:bg-black/6"
                  >
                    <TwitterIcon />
                  </a>
                )}
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      ref={triggerRef}
      className="relative"
      style={{ zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {typeof document !== "undefined" && createPortal(tooltip, document.body)}

      <motion.div
        animate={{ y: open ? -4 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
        className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white shadow-[0px_2px_4px_rgba(0,0,0,0.08)]"
        style={{ backgroundColor: member.color }}
      >
        {member.avatar ? (
          <Image
            src={member.avatar}
            alt={member.name}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[10px] font-semibold text-black/50">
              {member.initials}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function TeamAvatars() {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[12px] text-accent-orange leading-[15px]">
        • Our team
      </span>
      <div className="flex items-center -space-x-2">
        {team.map((member, i) => (
          <Avatar key={i} member={member} zIndex={team.length - i} />
        ))}
      </div>
    </div>
  );
}
