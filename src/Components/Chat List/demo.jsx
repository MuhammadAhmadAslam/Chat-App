export default function Widget() {
    return (
        <div className="flex flex-col h-screen bg-background">
          <header className="flex items-center justify-between p-4 border-b border-border">
            <h1 className="text-lg font-semibold">Building</h1>
            <div className="flex items-center space-x-2">
              <img undefinedhidden="true" alt="profile-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className="w-8 h-8 rounded-full" />
              <button className="text-muted hover:text-muted-foreground">
                <img undefinedhidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />
              </button>
            </div>
          </header>
        
          <main className="flex-1 p-4 overflow-y-auto bg-muted">
            <div className="flex flex-col space-y-4">
              
              <div className="text-center text-muted-foreground">
                <span>22/06/2024</span>
              </div>
              <div className="bg-muted-foreground text-muted p-2 rounded-lg">
                <p>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</p>
              </div>
            </div>
          </main>
        
          <footer className="flex items-center p-4 border-t border-border">
            <input type="text" placeholder="Type a message" className="flex-1 p-2 border border-border rounded-lg" />
            <button className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">
              <img undefinedhidden="true" alt="send-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉️" />
            </button>
          </footer>
        </div>
        
    )
}