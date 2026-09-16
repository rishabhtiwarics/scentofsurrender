import React from "react";
export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" /><path d="M20 20L15.8 15.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}
export function UserIcon() {
  return <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7.8" r="3.4" stroke="currentColor" strokeWidth="1.6" /><path d="M5 19.2c1.3-3.4 4.1-5.1 7-5.1s5.7 1.7 7 5.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}
export function CartIcon() {
  return <svg viewBox="0 0 24 24" fill="none"><path d="M5 7h2.2l1.5 10a1.8 1.8 0 0 0 1.8 1.5h6.4a1.8 1.8 0 0 0 1.8-1.5L20 9.3H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10.6" cy="21" r="1.1" fill="currentColor" /><circle cx="16.8" cy="21" r="1.1" fill="currentColor" /></svg>;
}
export function PlayIcon({ hidden = false }) {
  return <svg className="icon-play" viewBox="0 0 24 24" fill="none" style={{ display: hidden ? "none" : "" }}><path d="M8 5.3v13.4a1 1 0 0 0 1.5.87l11-6.7a1 1 0 0 0 0-1.74l-11-6.7A1 1 0 0 0 8 5.3z" fill="currentColor" /></svg>;
}
export function PauseIcon({ hidden = false }) {
  return <svg className="icon-pause" viewBox="0 0 24 24" fill="none" style={{ display: hidden ? "none" : "" }}><rect x="6.5" y="5" width="3.6" height="14" rx="1" fill="currentColor" /><rect x="13.9" y="5" width="3.6" height="14" rx="1" fill="currentColor" /></svg>;
}
export function MutedIcon({ hidden = false }) {
  return <svg className="icon-muted" viewBox="0 0 24 24" fill="none" style={{ display: hidden ? "none" : "" }}><path d="M4 9.5v5h3.6l4.7 3.9V5.6L7.6 9.5H4z" fill="currentColor" /><path d="M16.5 8.5l4 7M20.5 8.5l-4 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}
export function UnmutedIcon({ hidden = false }) {
  return <svg className="icon-unmuted" viewBox="0 0 24 24" fill="none" style={{ display: hidden ? "none" : "" }}><path d="M4 9.5v5h3.6l4.7 3.9V5.6L7.6 9.5H4z" fill="currentColor" /><path d="M15.8 9.2a4.4 4.4 0 0 1 0 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M18.1 6.9a7.8 7.8 0 0 1 0 10.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}
export function MenuIcon({ isOpen = false }) {
  if (isOpen) {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
