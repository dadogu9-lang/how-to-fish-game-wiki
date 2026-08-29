import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">HOW TO FISH <span>GAME WIKI</span></div>
          <p>Direct answers for How to Fish quests, bosses, islands, equipment, game updates, and player questions.</p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <Link href="/guides">Guides</Link>
          <Link href="/game-info">Game info</Link>
          <Link href="/bosses">Bosses</Link>
          <Link href="/fish">Fish database</Link>
        </div>
        <div className="footer-links">
          <span>Project</span>
          <Link href="/search">Search</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/privacy">Privacy</Link>
          <CookieSettingsButton />
          <a href="https://store.steampowered.com/app/4001890/How_to_Fish/" target="_blank" rel="noreferrer">Steam page ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Independent fan guide · patch-sensitive facts include dated sources</span>
        <span>© 2026 How to Fish Game Wiki</span>
      </div>
    </footer>
  );
}
