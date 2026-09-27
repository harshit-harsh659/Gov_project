import Link from 'next/link';
import { 
  ShieldCheck, LayoutDashboard, Briefcase, FileText, Upload, 
  Search, BarChart3, ListOrdered, Settings, ChevronDown, 
  Moon, Bell, CheckCircle, Plus, Hexagon, Activity, Lock, LogIn,
  Menu, ClipboardCheck
} from 'lucide-react';

export default function PublicDashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background"></div>

      {/* Static Sidebar */}
      <aside className="w-[260px] bg-surface border-r border-border hidden md:flex flex-col h-full shrink-0 relative z-20">
        <div className="h-16 flex items-center px-5 border-b border-border shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="text-[13px] font-bold text-content-primary tracking-[0.2em] uppercase">SECURA</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-5">
            {[
              {
                name: "COMMAND",
                items: [{ name: "Dashboard", href: "#", icon: LayoutDashboard, active: true }]
              },
              {
                name: "INVESTIGATIONS",
                items: [{ name: "Cases", href: "/login", icon: Briefcase }]
              },
              {
                name: "DOCUMENTS",
                items: [
                  { name: "Documents Vault", href: "/login", icon: FileText },
                  { name: "Upload Section", href: "/login", icon: Upload }
                ]
              },
              {
                name: "INTELLIGENCE",
                items: [
                  { name: "Global Search", href: "/login", icon: Search },
                  { name: "Reports & Analytics", href: "/login", icon: BarChart3 }
                ]
              },
              {
                name: "SECURITY & AUDIT",
                items: [
                  { name: "Security Center", href: "/login", icon: ShieldCheck },
                  { name: "Audit Trail", href: "/login", icon: ListOrdered }
                ]
              },
              {
                name: "SYSTEM",
                items: [{ name: "Settings", href: "/login", icon: Settings }]
              }
            ].map(group => (
              <div key={group.name}>
                <div className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-bold text-content-muted tracking-[0.2em]">
                  {group.name}
                  <ChevronDown className="w-3 h-3 opacity-40 rotate-180" />
                </div>
                <div className="mt-1 space-y-px">
                  {group.items.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative flex items-center gap-2.5 px-2.5 py-[7px] rounded-[3px] transition-all duration-200 text-[13px] group ${
                        (item as any).active
                          ? "text-accent bg-accent/[0.06]"
                          : "text-content-secondary hover:text-content-primary hover:bg-white/[0.02]"
                      }`}
                    >
                      {(item as any).active && (
                        <div className="absolute left-0 top-[20%] bottom-[20%] w-[2px] bg-accent rounded-r-full" />
                      )}
                      <item.icon className={`w-[15px] h-[15px] shrink-0 ${(item as any).active ? 'text-accent' : 'text-content-muted'}`} />
                      <span className="truncate leading-none">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="px-4 py-3 border-t border-border shrink-0">
          <div className="flex items-center gap-2.5 px-1">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-verification opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-verification"></span>
            </div>
            <span className="text-[10px] text-content-muted font-mono tracking-[0.15em] uppercase">System Nominal</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        
        {/* Static Topbar */}
        <header className="h-14 bg-surface/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 sticky top-0 z-50 shrink-0">
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <button className="md:hidden text-content-muted p-1">
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold text-content-muted tracking-[0.15em] uppercase hidden sm:block">
              Command Center
            </span>
          </div>

          <div className="flex-1 flex justify-center px-8 max-w-2xl">
            <Link href="/login" className="w-full flex items-center gap-3 bg-surface/60 border border-border rounded-md px-4 py-2 text-sm text-content-muted hover:border-border-hover hover:bg-surface transition-all cursor-pointer">
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="flex-1 text-left text-xs">Global Semantic Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] text-content-muted font-mono border border-border rounded px-1.5 py-0.5 bg-background/50">
                ⌘K
              </kbd>
            </Link>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:flex items-center gap-1.5 text-status-verification text-[10px] font-bold tracking-[0.15em] uppercase">
              <CheckCircle className="w-3 h-3" />
              <span>Secure</span>
            </div>
            <div className="h-4 w-px bg-border hidden lg:block" />
            <button className="text-content-muted hover:text-content-primary transition-colors p-1" title="Toggle Theme">
              <Moon className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-border" />
            <button className="relative text-content-muted hover:text-content-primary transition-colors p-1">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[8px] font-bold text-white">
                0
              </span>
            </button>
            <div className="h-4 w-px bg-border" />
            
            <Link href="/login" className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-1.5 rounded-md text-sm font-medium transition-colors border border-accent/20 hover:border-accent/40">
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="space-y-10 max-w-[1600px] opacity-100 transform-none">
            
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-content-primary tracking-tight">Command Center</h1>
                <p className="text-content-muted text-sm mt-1">Real-time overview of investigation, document and security operations.</p>
              </div>
              <div suppressHydrationWarning className="text-[10px] font-mono text-content-muted tracking-widest uppercase bg-surface border border-border rounded px-3 py-1.5">
                {new Date().toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
              </div>
            </div>

            {/* Static Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Active Cases", value: "0", icon: Briefcase, color: "text-accent" },
                { label: "Documents", value: "0", icon: FileText, color: "text-blue-400" },
                { label: "Verified", value: "0", sub: "0% integrity", icon: CheckCircle, color: "text-status-verification" },
                { label: "Pending Review", value: "0", icon: ClipboardCheck, color: "text-status-warning" },
                { label: "Evidence Items", value: "0", sub: "Registered locally", icon: Hexagon, color: "text-purple-400" },
                { label: "Security Alerts", value: "00", sub: "All clear", icon: Activity, color: "text-status-danger" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <stat.icon className={`w-12 h-12 ${stat.color}`} />
                  </div>
                  <div className="relative z-10">
                    <div className={`text-2xl font-bold text-content-primary tracking-tight font-mono mb-2`}>
                      {stat.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-content-muted tracking-[0.1em] uppercase">
                        {stat.label}
                      </div>
                      {stat.sub && (
                        <div className="text-[9px] text-content-secondary/60 tracking-wider">
                          {stat.sub}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Link href="/login" className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all bg-accent text-white hover:bg-accent-hover shadow-sm">
                <Plus className="w-4 h-4" /> New Case
              </Link>
              {[
                { label: "All Cases", icon: Briefcase },
                { label: "Upload Section", icon: Upload },
                { label: "Global Semantic Search", icon: Search },
                { label: "View Audit", icon: ClipboardCheck },
              ].map(action => (
                <Link key={action.label} href="/login"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all bg-surface border border-border text-content-secondary hover:text-content-primary hover:border-border-hover hover:bg-elevated hover:shadow-sm"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
              <div className="xl:col-span-8 space-y-10">
                {/* Active Investigations */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[10px] font-bold text-content-muted tracking-[0.2em] uppercase flex items-center gap-2">
                      <Activity className="w-4 h-4 text-accent" /> Active Investigations
                    </h2>
                    <Link href="/login" className="text-[10px] font-bold text-content-secondary hover:text-content-primary tracking-[0.1em] uppercase">
                      View All
                    </Link>
                  </div>
                  <div className="bg-surface border border-border rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                    <div className="text-center space-y-2">
                      <p className="text-sm font-medium text-content-secondary">No active cases.</p>
                      <p className="text-[11px] text-content-muted">Sign in to view assigned investigations.</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[10px] font-bold text-content-muted tracking-[0.2em] uppercase flex items-center gap-2">
                      <Lock className="w-4 h-4 text-status-warning" /> Recent Activity
                    </h2>
                  </div>
                  <div className="bg-surface border border-border rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                    <div className="text-center space-y-2">
                      <p className="text-sm font-medium text-content-secondary">No activity recorded.</p>
                      <p className="text-[11px] text-content-muted">Sign in to view system audit logs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Security */}
              <div className="xl:col-span-4 space-y-8">
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[10px] font-bold text-content-muted tracking-[0.2em] uppercase flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-status-verification" /> System Security
                    </h2>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Secure
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Authentication", status: "Operational", icon: Lock, ok: true },
                      { label: "Document Encryption", status: "Operational", icon: ShieldCheck, ok: true },
                      { label: "Integrity Verification", status: "Operational", icon: CheckCircle, ok: true },
                      { label: "Audit Logging", status: "Operational", icon: Activity, ok: true },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0 group">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-content-muted" />
                          <span className="text-sm font-medium text-content-secondary">{item.label}</span>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded bg-elevated text-status-verification">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
