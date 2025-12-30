// ============================================
// Nexus API Documentation - Script
// ============================================

// Global state
const state = {
    currentPage: 'about',
    currentTheme: localStorage.getItem('theme') || 'dark',
    searchData: [],
    isMobileMenuOpen: false,
    currentLanguage: 'lua'
};

// Content data for different pages
const contentData = {
    // About page
    about: {
        title: 'Nexus Remote Framework',
        lead: 'Enterprise-grade remote communication system for Roblox with advanced security, performance, and reliability features.',
        get content() {
            return `
                <div class="content-section">
                    <h1>About Nexus</h1>
                    <p class="lead-text">${this.lead}</p>
                    
                    <div class="info-box info">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Version 3.0.0</strong> - Optimized for 100,000+ CCU and production environments with heavy load.</p>
                        </div>
                    </div>
                    
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            </div>
                            <h3>Security First</h3>
                            <p>Multilayered security with packet validation, rate limiting, and exploit protection.</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/></svg>
                            </div>
                            <h3>High Performance</h3>
                            <p>Memory pooling, batching, and optimized serialization for maximum throughput.</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
                            </div>
                            <h3>Enterprise Ready</h3>
                            <p>Built for large-scale games with analytics, monitoring, and fault tolerance.</p>
                        </div>
                    </div>
                    
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Advanced Serialization</strong> - Multilayered compression with RLE, dictionary, and custom algorithms</li>
                        <li><strong>Dual-Layer Rate Limiting</strong> - Both client and server-side protection</li>
                        <li><strong>Zero-Trust Security</strong> - Packet validation, signature verification, threat detection</li>
                        <li><strong>Complete Type Support</strong> - All Roblox types + custom validation schemas</li>
                        <li><strong>Memory Efficient</strong> - Object pooling and optimized garbage collection</li>
                        <li><strong>Promise-Based API</strong> - Modern async/await patterns</li>
                        <li><strong>Middleware System</strong> - Extensible with custom middleware and interceptors</li>
                        <li><strong>Real-time Analytics</strong> - Performance monitoring and security event tracking</li>
                    </ul>
                    
                    <h2>System Architecture</h2>
                    <p>Nexus uses a modular architecture with independent components that work together:</p>
                    
                    <div class="flow-diagram">
                        <div class="flow-steps">
                            <div class="flow-step">
                                <div class="flow-step-box">Client Request</div>
                                <div class="flow-step-label">Player Action</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Validation</div>
                                <div class="flow-step-label">Schema & Rate Limit</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Middleware</div>
                                <div class="flow-step-label">Custom Logic</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Handler</div>
                                <div class="flow-step-label">Business Logic</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Response</div>
                                <div class="flow-step-label">Signed & Validated</div>
                            </div>
                        </div>
                    </div>
                    
                    <h2>Data Flow</h2>
                    <ol>
                        <li>Client prepares data and creates a signed packet</li>
                        <li>Packet goes through serialization (optional compression)</li>
                        <li>Server receives and validates packet signature and TTL</li>
                        <li>Rate limiting checks and circuit breaker evaluation</li>
                        <li>Schema validation against defined rules</li>
                        <li>Middleware processing (authentication, logging, etc.)</li>
                        <li>Business logic execution in handler</li>
                        <li>Response serialization and signing</li>
                        <li>Return to client with validation</li>
                    </ol>
                    
                    <div class="info-box success">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Production Ready:</strong> Nexus has been tested with 5,000,000,000+ total visits and is optimized for enterprise-scale deployment.</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // Getting Started page
    'getting-started': {
        title: 'Getting Started',
        get content() {
            return `
                <div class="content-section">
                    <h1>Getting Started with Nexus</h1>
                    <p class="lead-text">Learn how to install and configure Nexus for your Roblox game.</p>
                    
                    <h2>Installation</h2>
                    <p>Place all Nexus modules in a folder called <code class="inline-code">Nexus</code> within <code class="inline-code">ReplicatedStorage</code>.</p>
                    
                    <div class="code-block-inline">
                        <pre><code>ReplicatedStorage/
└── Nexus/
    ├── init.lua
    ├── serializer.lua
    ├── validator.lua
    ├── security.lua
    ├── ratelimiter.lua
    └── ... (other modules)</code></pre>
                    </div>
                    
                    <h2>Basic Setup</h2>
                    <h3>Server Setup</h3>
                    <div class="code-block-inline">
                        <pre><code>-- ServerScriptService: Main.server.lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Initialize Nexus
local nexus = Nexus.new()
nexus:Initialize({
    remotesFolder = ReplicatedStorage:WaitForChild("NexusRemotes"),
    debug = true,
    profile = true
})

-- Register a remote event
nexus:RegisterRemote("PlayerJoined", "Event", {
    rateLimit = {
        client = 10,  -- 10 calls per window
        server = 100, -- 100 calls per window
        window = 1    -- 1 second window
    },
    schema = {
        playerId = "number",
        username = "string",
        joinTime = "number"
    }
})

-- Add handler
nexus:On("PlayerJoined", function(player, playerId, username, joinTime)
    print(\`Player joined: \${username} (\${playerId}) at \${joinTime}\`)
    -- Your game logic here
end)</code></pre>
                    </div>
                    
                    <h3>Client Setup</h3>
                    <div class="code-block-inline">
                        <pre><code>-- LocalScript: Client.client.lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Initialize Nexus client
local nexus = Nexus.new()
nexus:Initialize()

-- Fire an event to server
nexus:Fire("PlayerJoined", 
    game.Players.LocalPlayer.UserId,
    game.Players.LocalPlayer.Name,
    os.time()
)</code></pre>
                    </div>
                    
                    <h2>Quick Examples</h2>
                    
                    <h3>Simple Remote Function</h3>
                    <div class="code-block-inline">
                        <pre><code>-- Server: Register and handle
nexus:RegisterRemote("GetPlayerData", "Function", {
    schema = {"string"},  -- Expects one string argument
    timeout = 5  -- 5 second timeout
})

nexus:On("GetPlayerData", function(player, dataKey)
    -- Return player data
    return {
        success = true,
        data = playerData[dataKey]
    }
end)

-- Client: Invoke
local result = nexus:Invoke("GetPlayerData", "inventory")
if result.success then
    print("Got inventory:", result.data)
end</code></pre>
                    </div>
                    
                    <h3>Batch Operations</h3>
                    <div class="code-block-inline">
                        <pre><code>-- Batch multiple operations
nexus:EnableBatching("PlayerUpdates", 0.1, 50)  -- Batch every 100ms, max 50

-- Send multiple updates efficiently
for i = 1, 10 do
    nexus:Fire("PlayerUpdates", player, updateType, updateData)
end</code></pre>
                    </div>
                    
                    <h2>Next Steps</h2>
                    <p>Once you have the basics working, explore:</p>
                    <ul>
                        <li><strong>Security Configuration</strong> - Set up packet validation and threat detection</li>
                        <li><strong>Custom Middleware</strong> - Add authentication, logging, or analytics</li>
                        <li><strong>Performance Tuning</strong> - Adjust compression and batching settings</li>
                        <li><strong>Monitoring</strong> - Set up analytics and metrics tracking</li>
                    </ul>
                    
                    <div class="info-box warning">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Important:</strong> Always enable security features in production. Test rate limits and validation thoroughly before deployment.</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // Architecture page
    architecture: {
        title: 'Architecture',
        get content() {
            return `
                <div class="content-section">
                    <h1>System Architecture</h1>
                    <p class="lead-text">Nexus is built with a modular, layered architecture designed for scalability and maintainability.</p>
                    
                    <h2>Core Components</h2>
                    
                    <div class="flow-diagram">
                        <div class="flow-steps">
                            <div class="flow-step">
                                <div class="flow-step-box">NexusRemote</div>
                                <div class="flow-step-label">Main Module</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Subsystems</div>
                                <div class="flow-step-label">8 Modules</div>
                            </div>
                            <div class="flow-arrow"></div>
                            <div class="flow-step">
                                <div class="flow-step-box">Roblox</div>
                                <div class="flow-step-label">Remote Events</div>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Component Breakdown</h3>
                    <table class="param-table">
                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Purpose</th>
                                <th>Key Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>NexusRemote</strong></td>
                                <td>Main orchestrator</td>
                                <td>Remote registration, communication, middleware</td>
                            </tr>
                            <tr>
                                <td><strong>Serializer</strong></td>
                                <td>Data transformation</td>
                                <td>Compression, encryption, type serialization</td>
                            </tr>
                            <tr>
                                <td><strong>Validator</strong></td>
                                <td>Data validation</td>
                                <td>Schema validation, type checking, exploit prevention</td>
                            </tr>
                            <tr>
                                <td><strong>Security</strong></td>
                                <td>Security layer</td>
                                <td>Packet signing, threat detection, session management</td>
                            </tr>
                            <tr>
                                <td><strong>RateLimiter</strong></td>
                                <td>Traffic control</td>
                                <td>Dual-layer limiting, adaptive limits, burst protection</td>
                            </tr>
                            <tr>
                                <td><strong>Analytics</strong></td>
                                <td>Monitoring</td>
                                <td>Performance tracking, error logging, security events</td>
                            </tr>
                            <tr>
                                <td><strong>Promise</strong></td>
                                <td>Async handling</td>
                                <td>Promise/A+ implementation, async/await support</td>
                            </tr>
                            <tr>
                                <td><strong>MemoryPool</strong></td>
                                <td>Performance</td>
                                <td>Object pooling, memory optimization</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h2>Data Flow Architecture</h2>
                    <div class="code-block-inline">
                        <pre><code>┌─────────────────────────────────────────────────────────┐
│                    Client Request                       │
├─────────────────────────────────────────────────────────┤
│ 1. Create packet with data                             │
│ 2. Serialize (optional compression)                    │
│ 3. Sign packet with security module                    │
│ 4. Apply rate limiting check                           │
│ 5. Send through Roblox RemoteEvent                     │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│                    Server Processing                    │
├─────────────────────────────────────────────────────────┤
│ 1. Validate packet signature                           │
│ 2. Check packet TTL (time-to-live)                     │
│ 3. Apply rate limiting (server side)                   │
│ 4. Validate against schema                             │
│ 5. Run middleware chain                                │
│ 6. Execute handler (business logic)                    │
│ 7. Process response through interceptors               │
│ 8. Sign and send response                              │
└─────────────────────────────────────────────────────────┘</code></pre>
                    </div>
                    
                    <h2>Security Architecture</h2>
                    <p>Nexus implements a zero-trust security model with multiple layers:</p>
                    
                    <h3>Layer 1: Packet Security</h3>
                    <ul>
                        <li><strong>Signature Verification</strong> - All packets are signed with HMAC</li>
                        <li><strong>TTL Validation</strong> - Packets expire after configured time</li>
                        <li><strong>Replay Attack Protection</strong> - Nonce tracking prevents reuse</li>
                        <li><strong>Checksum Validation</strong> - Ensures packet integrity</li>
                    </ul>
                    
                    <h3>Layer 2: Rate Limiting</h3>
                    <ul>
                        <li><strong>Client-side limiting</strong> - Prevents client abuse</li>
                        <li><strong>Server-side limiting</strong> - Per-player and global limits</li>
                        <li><strong>Adaptive limits</strong> - Adjusts based on trust score</li>
                        <li><strong>Burst protection</strong> - Allows short bursts within limits</li>
                    </ul>
                    
                    <h3>Layer 3: Validation</h3>
                    <ul>
                        <li><strong>Schema validation</strong> - Type and structure checking</li>
                        <li><strong>Exploit pattern detection</strong> - Blocks known attack patterns</li>
                        <li><strong>Depth limiting</strong> - Prevents recursion attacks</li>
                        <li><strong>Size limits</strong> - Prevents memory exhaustion</li>
                    </ul>
                    
                    <h2>Performance Architecture</h2>
                    
                    <h3>Memory Management</h3>
                    <div class="code-block-inline">
                        <pre><code>-- Object pooling example
local pool = MemoryPool.new()
pool:Initialize(1000)  -- Pool of 1000 objects

-- Acquire object from pool
local packet = pool:Acquire("packet", function()
    return {
        id = "",
        timestamp = 0,
        data = {}
    }
end)

-- Use object
packet.id = HttpService:GenerateGUID(false)
packet.timestamp = os.clock()

-- Return to pool when done
pool:Release("packet", packet)</code></pre>
                    </div>
                    
                    <h3>Compression Strategies</h3>
                    <p>Nexus uses multiple compression algorithms based on data characteristics:</p>
                    <table class="param-table">
                        <thead>
                            <tr>
                                <th>Algorithm</th>
                                <th>Best For</th>
                                <th>Compression Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RLE (Run-Length Encoding)</td>
                                <td>Repeated patterns, numeric data</td>
                                <td>2-10x</td>
                            </tr>
                            <tr>
                                <td>Dictionary Compression</td>
                                <td>JSON-like data, common strings</td>
                                <td>1.5-4x</td>
                            </tr>
                            <tr>
                                <td>Base64 (for binary)</td>
                                <td>Binary data, URL safety</td>
                                <td>1.33x expansion</td>
                            </tr>
                            <tr>
                                <td>Custom Algorithms</td>
                                <td>Roblox-specific data types</td>
                                <td>2-8x</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h2>Scalability Features</h2>
                    <ul>
                        <li><strong>Horizontal Scaling</strong> - Stateless design allows multiple servers</li>
                        <li><strong>Memory Store Support</strong> - Distributed rate limiting</li>
                        <li><strong>Adaptive Load Balancing</strong> - Adjusts limits based on load</li>
                        <li><strong>Connection Pooling</strong> - Reuses connections efficiently</li>
                        <li><strong>Batch Processing</strong> - Groups operations for efficiency</li>
                    </ul>
                    
                    <div class="info-box info">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Architecture Tip:</strong> Nexus modules are designed to work independently. You can use the Serializer or Validator modules separately if needed.</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // NexusRemote API
    nexusremote: {
        title: 'NexusRemote API',
        get content() {
            return `
                <div class="content-section">
                    <h1>NexusRemote Class</h1>
                    <p class="lead-text">The main orchestrator class that manages all remote communication.</p>
                    
                    <div class="method-badge both">
                        <span>Class</span>
                    </div>
                    
                    <h2>Constructor</h2>
                    <div class="code-block-inline">
                        <pre><code>local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new(config: RemoteConfig?)</code></pre>
                    </div>
                    
                    <h3>Parameters</h3>
                    <table class="param-table">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="param-name">config</span></td>
                                <td><span class="param-type">RemoteConfig?</span></td>
                                <td><span class="param-required optional">Optional</span></td>
                                <td class="param-desc">Configuration object for Nexus instance</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3>RemoteConfig Type</h3>
                    <div class="code-block-inline">
                        <pre><code>type RemoteConfig = {
    debug: boolean?,
    security: {
        enforceRateLimits: boolean?,
        validateSignatures: boolean?,
        packetTTL: number?,
        maxPacketSize: number?,
        threatDetection: boolean?,
        autoBanThreshold: number?
    },
    performance: {
        batchInterval: number?,
        maxBatchSize: number?,
        compressionThreshold: number?,
        useMemoryPool: boolean?,
        poolSize: number?,
        cleanupInterval: number?
    }
}</code></pre>
                    </div>
                    
                    <h2>Static Methods</h2>
                    
                    <h3>GetInstance</h3>
                    <div class="code-block-inline">
                        <pre><code>local nexus = Nexus.GetInstance()</code></pre>
                    </div>
                    <p>Returns the active Nexus instance (singleton pattern).</p>
                    
                    <h3>IsInitialized</h3>
                    <div class="code-block-inline">
                        <pre><code>local initialized = Nexus.IsInitialized()</code></pre>
                    </div>
                    <p>Returns <code class="inline-code">true</code> if Nexus has been initialized.</p>
                    
                    <h2>Instance Methods</h2>
                    
                    <h3>Initialize</h3>
                    <div class="code-block-inline">
                        <pre><code>nexus:Initialize(options: {
    remotesFolder: Folder?,
    debug: boolean?,
    profile: boolean?
}): NexusRemote</code></pre>
                    </div>
                    <p>Initializes Nexus with the given options. Must be called before using any other methods.</p>
                    
                    <h3>RegisterRemote</h3>
                    <div class="code-block-inline">
                        <pre><code>nexus:RegisterRemote(name: string, remoteType: "Event" | "Function", config: RemoteConfig?): NexusRemote</code></pre>
                    </div>
                    <p>Registers a new remote with the given name and type.</p>
                    
                    <h3>On</h3>
                    <div class="code-block-inline">
                        <pre><code>nexus:On(remoteName: string, handler: (player: Player?, ...any) -> any, options: {
    async: boolean?,
    timeout: number?
}?): NexusRemote</code></pre>
                    </div>
                    <p>Sets up a handler for incoming remote calls.</p>
                    
                    <h3>Fire / FireClient / FireAllClients</h3>
                    <div class="code-block-inline">
                        <pre><code>-- Client to server
nexus:Fire(remoteName: string, ...any): boolean

-- Server to specific client
nexus:FireClient(remoteName: string, player: Player, ...any): boolean

-- Server to all clients
nexus:FireAllClients(remoteName: string, ...any): boolean</code></pre>
                    </div>
                    <p>Sends events to the server or clients.</p>
                    
                    <h3>Invoke / InvokeClient</h3>
                    <div class="code-block-inline">
                        <pre><code>-- Client to server (returns response)
local response = nexus:Invoke(remoteName: string, ...any): any

-- Server to client (returns response)
local response = nexus:InvokeClient(remoteName: string, player: Player, ...any): any</code></pre>
                    </div>
                    <p>Invokes remote functions and waits for a response.</p>
                    
                    <h2>Usage Example</h2>
                    <div class="code-block-inline">
                        <pre><code>-- Complete example
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Create instance
local nexus = Nexus.new({
    security = {
        enforceRateLimits = true,
        validateSignatures = true,
        packetTTL = 10
    }
})

-- Initialize
nexus:Initialize({
    remotesFolder = ReplicatedStorage:WaitForChild("NexusRemotes"),
    debug = true
})

-- Register remote
nexus:RegisterRemote("PlayerChat", "Event", {
    rateLimit = {
        client = 20,
        server = 100,
        window = 1
    },
    schema = {
        "string",  -- message
        "number"   -- timestamp
    }
})

-- Set handler
nexus:On("PlayerChat", function(player, message, timestamp)
    print(\`\${player.Name} said: \${message} at \${timestamp}\`)
    -- Broadcast to other players
    nexus:FireExcept("PlayerChat", player, player.Name, message, timestamp)
end)</code></pre>
                    </div>
                    
                    <h2>Error Handling</h2>
                    <p>NexusRemote methods return structured error responses:</p>
                    <div class="code-block-inline">
                        <pre><code>{
    success: boolean,
    error: string?,
    code: string?,
    timestamp: number,
    requestId: string?
}</code></pre>
                    </div>
                    
                    <table class="param-table">
                        <thead>
                            <tr>
                                <th>Error Code</th>
                                <th>Description</th>
                                <th>Possible Causes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code class="inline-code">RATE_LIMIT</code></td>
                                <td>Rate limit exceeded</td>
                                <td>Too many requests in time window</td>
                            </tr>
                            <tr>
                                <td><code class="inline-code">SECURITY_ERROR</code></td>
                                <td>Security violation</td>
                                <td>Invalid signature, expired packet</td>
                            </tr>
                            <tr>
                                <td><code class="inline-code">VALIDATION_ERROR</code></td>
                                <td>Schema validation failed</td>
                                <td>Wrong data type or structure</td>
                            </tr>
                            <tr>
                                <td><code class="inline-code">TIMEOUT</code></td>
                                <td>Request timeout</td>
                                <td>Handler took too long</td>
                            </tr>
                            <tr>
                                <td><code class="inline-code">CIRCUIT_OPEN</code></td>
                                <td>Circuit breaker open</td>
                                <td>Too many failures on remote</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }
    },

    // Initialize page
    initialization: {
        title: 'Initialize Method',
        get content() {
            return `
                <div class="content-section">
                    <h1>Initialize Method</h1>
                    <p class="lead-text">Sets up Nexus with configuration options and prepares it for use.</p>
                    
                    <div class="method-badge both">
                        <span>Method</span>
                    </div>
                    
                    <h2>Syntax</h2>
                    <div class="code-block-inline">
                        <pre><code>nexus:Initialize(options: {
    remotesFolder: Folder?,
    debug: boolean?,
    profile: boolean?
}): NexusRemote</code></pre>
                    </div>
                    
                    <h2>Parameters</h2>
                    <table class="param-table">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="param-name">remotesFolder</span></td>
                                <td><span class="param-type">Folder?</span></td>
                                <td><span class="param-required optional">Optional</span></td>
                                <td>ReplicatedStorage.NexusRemotes</td>
                                <td class="param-desc">Folder where remote instances will be created</td>
                            </tr>
                            <tr>
                                <td><span class="param-name">debug</span></td>
                                <td><span class="param-type">boolean?</span></td>
                                <td><span class="param-required optional">Optional</span></td>
                                <td>true in Studio</td>
                                <td class="param-desc">Enable debug logging and verbose output</td>
                            </tr>
                            <tr>
                                <td><span class="param-name">profile</span></td>
                                <td><span class="param-type">boolean?</span></td>
                                <td><span class="param-required optional">Optional</span></td>
                                <td>false</td>
                                <td class="param-desc">Enable performance profiling</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h2>Returns</h2>
                    <p>Returns the NexusRemote instance for method chaining.</p>
                    
                    <h2>Description</h2>
                    <p>The <code class="inline-code">Initialize</code> method must be called before using any other Nexus methods. It performs the following actions:</p>
                    
                    <ol>
                        <li>Creates or finds the remotes folder in ReplicatedStorage</li>
                        <li>Initializes all sub-systems (Serializer, Validator, Security, etc.)</li>
                        <li>Sets up player connection/disconnection tracking (server only)</li>
                        <li>Starts the heartbeat loop for batch processing and cleanup</li>
                        <li>Configures analytics and security modules</li>
                    </ol>
                    
                    <h2>Examples</h2>
                    
                    <h3>Basic Initialization</h3>
                    <div class="code-block-inline">
                        <pre><code>local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new()

-- Minimal setup
nexus:Initialize()

-- Advanced setup with options
nexus:Initialize({
    remotesFolder = ReplicatedStorage:WaitForChild("MyRemotes"),
    debug = game:GetService("RunService"):IsStudio(),
    profile = true
})</code></pre>
                    </div>
                    
                    <h3>Server-Specific Initialization</h3>
                    <div class="code-block-inline">
                        <pre><code>-- ServerScriptService: Init.server.lua
local Nexus = require(ReplicatedStorage.Nexus.init)

local nexus = Nexus.new({
    security = {
        enforceRateLimits = true,
        autoBanThreshold = 5
    }
})

nexus:Initialize({
    debug = true,
    profile = true
})

-- Set up player join/leave handlers
game:GetService("Players").PlayerAdded:Connect(function(player)
    nexus.security:InitializePlayer(player)
    print(\`Player \${player.Name} initialized in Nexus\`)
end)</code></pre>
                    </div>
                    
                    <h3>Client-Specific Initialization</h3>
                    <div class="code-block-inline">
                        <pre><code>-- LocalScript: Client.client.lua
local Nexus = require(ReplicatedStorage.Nexus.init)

local nexus = Nexus.new({
    performance = {
        useMemoryPool = true
    }
})

nexus:Initialize({
    debug = false  -- Disable debug on client for performance
})

-- Client is now ready to use Nexus remotes</code></pre>
                    </div>
                    
                    <h2>Error Cases</h2>
                    
                    <div class="info-box error">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Common Error:</strong> Calling other Nexus methods before <code class="inline-code">Initialize()</code> will throw an error: "[Nexus] Must call Initialize() first"</p>
                        </div>
                    </div>
                    
                    <div class="info-box warning">
                        <div class="info-box-icon">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="info-box-content">
                            <p><strong>Performance Tip:</strong> Disable <code class="inline-code">debug</code> mode in production for better performance. Only enable <code class="inline-code">profile</code> when actively debugging performance issues.</p>
                        </div>
                    </div>
                    
                    <h2>Advanced Configuration</h2>
                    <p>You can combine <code class="inline-code">Initialize</code> with other configuration methods:</p>
                    
                    <div class="code-block-inline">
                        <pre><code>-- Comprehensive setup
local nexus = Nexus.new({
    security = {
        validateSignatures = true,
        packetTTL = 15
    }
})

nexus:Initialize({
    debug = true
})

-- Set up custom middleware
nexus:UseMiddleware("auth", function(context)
    -- Custom authentication logic
    return true
end)

-- Register remotes after initialization
nexus:RegisterRemote("SecureAction", "Function", {
    middleware = {"auth"},
    schema = {"string", "number"}
})</code></pre>
                    </div>
                </div>
            `;
        }
    }
};

// Code examples for the code panel
const codeExamples = {
    about: {
        lua: `-- Basic Nexus setup example
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Create Nexus instance
local nexus = Nexus.new({
    security = {
        enforceRateLimits = true,
        validateSignatures = true
    },
    performance = {
        useMemoryPool = true,
        compressionThreshold = 512
    }
})

-- Initialize
nexus:Initialize({
    remotesFolder = ReplicatedStorage:WaitForChild("NexusRemotes"),
    debug = game:GetService("RunService"):IsStudio()
})

print("Nexus initialized successfully!")`,
        typescript: `// TypeScript type definitions for Nexus
interface RemoteConfig {
    debug?: boolean;
    security?: {
        enforceRateLimits?: boolean;
        validateSignatures?: boolean;
        packetTTL?: number;
        maxPacketSize?: number;
        threatDetection?: boolean;
        autoBanThreshold?: number;
    };
    performance?: {
        batchInterval?: number;
        maxBatchSize?: number;
        compressionThreshold?: number;
        useMemoryPool?: boolean;
        poolSize?: number;
        cleanupInterval?: number;
    };
}

interface Packet {
    id: string;
    version: number;
    timestamp: number;
    signature: string;
    checksum: string;
    nonce: string;
    compression?: string;
    data: any;
    metadata: {
        sender?: string;
        priority?: number;
        ttl?: number;
        remote?: string;
        platform?: string;
        sessionId?: string;
    };
}`
    },
    'getting-started': {
        lua: `-- Complete getting started example
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Server-side setup
if game:GetService("RunService"):IsServer() then
    local nexus = Nexus.new()
    nexus:Initialize()
    
    -- Register a simple event
    nexus:RegisterRemote("PlayerJoined", "Event", {
        rateLimit = { client = 5, server = 50, window = 1 },
        schema = { "string", "number" }
    })
    
    nexus:On("PlayerJoined", function(player, username, timestamp)
        print(\`\${username} joined at \${timestamp}\`)
        -- Welcome the player
        nexus:FireClient("WelcomeMessage", player, "Welcome to the game!")
    end)
    
    -- Register a function
    nexus:RegisterRemote("GetPlayerStats", "Function", {
        schema = { "string" },
        timeout = 5
    })
    
    nexus:On("GetPlayerStats", function(player, statType)
        return {
            success = true,
            data = playerData[statType] or {}
        }
    end)
end

-- Client-side setup
if game:GetService("RunService"):IsClient() then
    local nexus = Nexus.new()
    nexus:Initialize()
    
    -- Fire event to server
    local player = game.Players.LocalPlayer
    nexus:Fire("PlayerJoined", player.Name, os.time())
    
    -- Invoke function and handle response
    local response = nexus:Invoke("GetPlayerStats", "inventory")
    if response.success then
        print("Inventory:", response.data)
    end
end`,
        typescript: `// TypeScript usage example
class GameClient {
    private nexus: any;
    
    constructor() {
        this.initializeNexus();
    }
    
    private initializeNexus(): void {
        // In Roblox, you'd require the module
        // For TypeScript, define types for better intellisense
    }
    
    public sendChatMessage(message: string): void {
        // This would call nexus:Fire() in actual implementation
        console.log(\`Sending message: \${message}\`);
    }
    
    public async getPlayerData(): Promise<any> {
        // This would call nexus:Invoke() in actual implementation
        return { success: true, data: {} };
    }
}`
    },
    architecture: {
        lua: `-- Architecture example showing module interaction
local Nexus = require(ReplicatedStorage.Nexus.init)
local Serializer = require(ReplicatedStorage.Nexus.serializer)
local Validator = require(ReplicatedStorage.Nexus.validator)

-- Create instances
local nexus = Nexus.new()
local serializer = Serializer.new()
local validator = Validator.new()

-- Initialize Nexus
nexus:Initialize()

-- Example of module interaction
local data = {
    playerId = 123,
    position = Vector3.new(10, 20, 30),
    inventory = {"sword", "shield", "potion"}
}

-- Validate data
local valid, error = validator:Validate(data, {
    playerId = "number",
    position = "Vector3",
    inventory = {"string"}
})

if valid then
    -- Serialize data
    local serialized = serializer:Serialize(data, {
        compress = true,
        strategy = "json"
    })
    
    print("Data serialized:", #serialized, "bytes")
    
    -- Send via Nexus
    nexus:Fire("PlayerUpdate", serialized)
else
    warn("Validation failed:", error)
end`,
        typescript: `// Architecture type example
interface NexusArchitecture {
    core: {
        nexusRemote: any;
        initialized: boolean;
    };
    modules: {
        serializer: any;
        validator: any;
        security: any;
        rateLimiter: any;
        analytics: any;
        promise: any;
        memoryPool: any;
        circuitBreaker: any;
        profiler: any;
    };
    config: {
        security: SecurityConfig;
        performance: PerformanceConfig;
        debug: boolean;
    };
}

interface SecurityConfig {
    enforceRateLimits: boolean;
    validateSignatures: boolean;
    packetTTL: number;
    threatDetection: boolean;
}

interface PerformanceConfig {
    batchInterval: number;
    maxBatchSize: number;
    useMemoryPool: boolean;
    compressionThreshold: number;
}`
    },
    nexusremote: {
        lua: `-- NexusRemote usage examples
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Create instance with configuration
local nexus = Nexus.new({
    security = {
        enforceRateLimits = true,
        validateSignatures = true,
        packetTTL = 10
    },
    performance = {
        batchInterval = 0.1,
        maxBatchSize = 50
    }
})

-- Initialize
nexus:Initialize({
    debug = true
})

-- Example 1: Register and use an event
nexus:RegisterRemote("PlayerChat", "Event", {
    rateLimit = { client = 10, server = 100, window = 1 },
    schema = { "string", "number" }
})

nexus:On("PlayerChat", function(player, message, timestamp)
    print(\`\${player.Name}: \${message} (\${timestamp})\`)
    
    -- Broadcast to other players
    for _, otherPlayer in pairs(game:GetService("Players"):GetPlayers()) do
        if otherPlayer ~= player then
            nexus:FireClient("ChatMessage", otherPlayer, player.Name, message)
        end
    end
end)

-- Example 2: Register and use a function
nexus:RegisterRemote("GetPlayerData", "Function", {
    schema = { "string" },
    timeout = 5
})

nexus:On("GetPlayerData", function(player, dataType)
    if dataType == "inventory" then
        return {
            success = true,
            data = {
                gold = 100,
                items = {"sword", "shield", "potion"}
            }
        }
    elseif dataType == "stats" then
        return {
            success = true,
            data = {
                level = 10,
                experience = 4500,
                health = 100
            }
        }
    else
        return {
            success = false,
            error = "Unknown data type",
            code = "INVALID_TYPE"
        }
    end
end)`,
        typescript: `// TypeScript interface for NexusRemote
interface NexusRemote {
    new(config?: RemoteConfig): NexusRemote;
    
    // Initialization
    Initialize(options: InitOptions): NexusRemote;
    
    // Remote management
    RegisterRemote(name: string, type: "Event" | "Function", config?: RemoteConfig): NexusRemote;
    On(name: string, handler: Function, options?: HandlerOptions): NexusRemote;
    
    // Communication
    Fire(name: string, ...args: any[]): boolean;
    FireClient(name: string, player: Player, ...args: any[]): boolean;
    FireAllClients(name: string, ...args: any[]): boolean;
    Invoke(name: string, ...args: any[]): any;
    InvokeClient(name: string, player: Player, ...args: any[]): any;
    
    // Configuration
    SetRateLimit(name: string, clientLimit?: number, serverLimit?: number, window?: number): NexusRemote;
    SetSchema(name: string, schema: Schema): NexusRemote;
    EnableBatching(name: string, interval: number, maxSize?: number): NexusRemote;
    
    // Utilities
    GetMetrics(name?: string, detailed?: boolean): Metrics;
    GetSecurityReport(options?: SecurityReportOptions): SecurityReport;
    Destroy(): void;
}`
    },
    initialization: {
        lua: `-- Initialization examples
local Nexus = require(ReplicatedStorage.Nexus.init)

-- Example 1: Basic initialization
local nexus1 = Nexus.new()
nexus1:Initialize()  -- Uses defaults

-- Example 2: Server initialization with custom folder
local nexus2 = Nexus.new({
    security = {
        autoBanThreshold = 10,
        threatDetection = true
    }
})

nexus2:Initialize({
    remotesFolder = Instance.new("Folder"),
    debug = true,
    profile = true
})

-- Example 3: Client initialization
local nexus3 = Nexus.new({
    performance = {
        useMemoryPool = true,
        compressionThreshold = 256
    }
})

nexus3:Initialize({
    debug = false  -- Disable debug on client
})

-- Example 4: Error handling during initialization
local success, error = pcall(function()
    local nexus4 = Nexus.new()
    nexus4:Initialize({
        remotesFolder = "invalid"  -- This will cause an error
    })
end)

if not success then
    warn("Initialization failed:", error)
end

-- Example 5: Re-initialization protection
local nexus5 = Nexus.new()
nexus5:Initialize()

-- Trying to initialize again will warn
nexus5:Initialize()  -- Prints: "[Nexus] Already initialized"`,
        typescript: `// TypeScript initialization types
interface InitOptions {
    remotesFolder?: Instance;  // Roblox Folder instance
    debug?: boolean;
    profile?: boolean;
}

interface NexusInstance {
    // Singleton pattern
    GetInstance(): NexusInstance;
    IsInitialized(): boolean;
    
    // Initialization
    Initialize(options: InitOptions): NexusInstance;
    
    // Configuration getters
    GetConfig(): RemoteConfig;
    GetVersion(): string;
}

// Usage example in TypeScript (conceptual)
class GameServer {
    private nexus: NexusInstance;
    
    constructor() {
        this.nexus = Nexus.new();
        this.setupNexus();
    }
    
    private setupNexus(): void {
        this.nexus.Initialize({
            debug: true,
            profile: true
        });
        
        // Now safe to use other methods
        this.registerRemotes();
    }
    
    private registerRemotes(): void {
        // Register remotes here
    }
}`
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize search
    initSearch();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Load initial page
    loadPage('about');
    
    // Build search index
    buildSearchIndex();
});

// Theme functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Set initial theme
    body.setAttribute('data-theme', state.currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', state.currentTheme);
        localStorage.setItem('theme', state.currentTheme);
    });
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            state.currentTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', state.currentTheme);
        }
    });
}

// Navigation functionality
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const mainContent = document.getElementById('mainContent');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const page = this.getAttribute('data-page');
            if (page) {
                // Update active state
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Load page
                loadPage(page);
                
                // Close mobile menu if open
                if (state.isMobileMenuOpen) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Load page content
function loadPage(pageId) {
    state.currentPage = pageId;
    
    const content = contentData[pageId];
    const mainContent = document.getElementById('mainContent');
    const codePanel = document.getElementById('codePanel');
    
    if (!content) {
        mainContent.innerHTML = `
            <div class="content-section">
                <h1>Page Not Found</h1>
                <p>The requested page could not be found.</p>
                <a href="#" class="nav-item" data-page="about">Return to Home</a>
            </div>
        `;
        codePanel.innerHTML = '';
        return;
    }
    
    // Update main content
    mainContent.innerHTML = content.content;
    document.title = `${content.title} - Nexus API Documentation`;
    
    // Update code panel
    updateCodePanel(pageId);
    
    // Re-attach event listeners to any new links
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                loadPage(page);
            }
        });
    });
    
    // Add fade-in animation
    mainContent.classList.add('fade-in');
    setTimeout(() => mainContent.classList.remove('fade-in'), 300);
}

// Update code panel with examples
function updateCodePanel(pageId) {
    const codePanel = document.getElementById('codePanel');
    const examples = codeExamples[pageId];
    
    if (!examples) {
        codePanel.innerHTML = `
            <div class="code-example">
                <div class="code-example-header">
                    <div class="code-example-title">No Examples</div>
                </div>
                <p>No code examples available for this page.</p>
            </div>
        `;
        return;
    }
    
    codePanel.innerHTML = `
        <div class="code-example">
            <div class="code-example-header">
                <div class="code-example-title">Code Examples</div>
                <div class="code-example-lang">
                    <button class="lang-btn ${state.currentLanguage === 'lua' ? 'active' : ''}" data-lang="lua">Lua</button>
                    <button class="lang-btn ${state.currentLanguage === 'typescript' ? 'active' : ''}" data-lang="typescript">TypeScript</button>
                </div>
            </div>
            <div class="code-block">
                <pre><code id="codeContent">${escapeHtml(examples[state.currentLanguage] || examples.lua)}</code></pre>
                <button class="copy-btn" onclick="copyCode()">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Add syntax highlighting
    highlightCode();
    
    // Add language switcher listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            state.currentLanguage = lang;
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update code
            updateCodePanel(pageId);
        });
    });
}

// Copy code to clipboard
function copyCode() {
    const codeContent = document.getElementById('codeContent');
    const text = codeContent.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        
        copyBtn.innerHTML = `
            <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
        `;
        copyBtn.style.background = 'var(--success)';
        copyBtn.style.borderColor = 'var(--success)';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = '';
            copyBtn.style.borderColor = '';
        }, 2000);
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchModal = document.getElementById('searchModal');
    const searchModalInput = document.getElementById('searchModalInput');
    const searchModalClose = document.getElementById('searchModalClose');
    const searchResults = document.getElementById('searchResults');
    
    // Open search modal on '/' key
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            openSearchModal();
        }
        
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            closeSearchModal();
        }
    });
    
    // Open modal on search input click
    searchInput.addEventListener('click', openSearchModal);
    
    // Close modal
    searchModalClose.addEventListener('click', closeSearchModal);
    
    // Search as you type
    searchModalInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length === 0) {
            searchResults.innerHTML = '<div class="search-empty">Start typing to search...</div>';
            return;
        }
        
        const results = search(query);
        displaySearchResults(results);
    });
    
    // Close modal on background click
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearchModal();
        }
    });
    
    function openSearchModal() {
        searchModal.classList.add('active');
        searchModalInput.focus();
        searchModalInput.select();
    }
    
    function closeSearchModal() {
        searchModal.classList.remove('active');
        searchModalInput.value = '';
        searchResults.innerHTML = '';
    }
}

// Build search index
function buildSearchIndex() {
    state.searchData = [];
    
    // Add page titles and descriptions to search index
    Object.entries(contentData).forEach(([pageId, content]) => {
        // Extract text from HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content.content;
        const textContent = tempDiv.textContent || '';
        
        state.searchData.push({
            id: pageId,
            title: content.title,
            description: textContent.substring(0, 200) + '...',
            type: 'page'
        });
    });
    
    // Add API methods
    const apiMethods = [
        { id: 'nexusremote', title: 'NexusRemote Class', description: 'Main orchestrator class' },
        { id: 'initialization', title: 'Initialize Method', description: 'Initialize Nexus with configuration' },
        { id: 'register-remote', title: 'RegisterRemote Method', description: 'Register a new remote' },
        { id: 'fire', title: 'Fire Methods', description: 'Send events to server or clients' },
        { id: 'invoke', title: 'Invoke Methods', description: 'Invoke remote functions' }
    ];
    
    apiMethods.forEach(method => {
        state.searchData.push({
            ...method,
            type: 'method'
        });
    });
}

// Search function
function search(query) {
    if (!query) return [];
    
    return state.searchData.filter(item => {
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query);
    }).slice(0, 10); // Limit to 10 results
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-empty">
                <p>No results found</p>
                <p style="font-size: 12px; margin-top: 8px;">Try different keywords or check the navigation</p>
            </div>
        `;
        return;
    }
    
    searchResults.innerHTML = results.map(result => `
        <div class="search-result-item" data-page="${result.id}">
            <div class="search-result-icon">
                ${result.type === 'page' ? 
                    '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>' :
                    '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>'
                }
            </div>
            <div class="search-result-content">
                <h4>${result.title}</h4>
                <p>${result.description}</p>
            </div>
        </div>
    `).join('');
    
    // Add click handlers to search results
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            closeSearchModal();
            
            // Update navigation
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
            if (navItem) {
                navItem.classList.add('active');
            }
            
            // Load page
            loadPage(pageId);
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            if (state.isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
    
    function toggleMobileMenu() {
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
        sidebar.classList.toggle('active', state.isMobileMenuOpen);
        mobileMenuToggle.style.transform = state.isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)';
    }
}

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Simple syntax highlighting
function highlightCode() {
    const codeElement = document.getElementById('codeContent');
    if (!codeElement) return;
    
    let code = codeElement.textContent;
    
    // Lua highlighting
    if (state.currentLanguage === 'lua') {
        code = code
            .replace(/\b(function|local|return|if|then|else|elseif|end|for|while|do|repeat|until|in|and|or|not|nil|false|true)\b/g, '<span class="token keyword">$&</span>')
            .replace(/\b(require|print|warn|error|pcall|type|typeof|tostring|tonumber|table|string|math|os)\b/g, '<span class="token function">$&</span>')
            .replace(/"([^"]*)"|\'([^\']*)\'/g, '<span class="token string">$&</span>')
            .replace(/\b\d+\b/g, '<span class="token number">$&</span>')
            .replace(/--.*$/gm, '<span class="token comment">$&</span>');
    }
    
    // TypeScript highlighting
    if (state.currentLanguage === 'typescript') {
        code = code
            .replace(/\b(interface|class|extends|implements|public|private|protected|static|readonly|async|await|function|const|let|var|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|typeof|instanceof|in|of)\b/g, '<span class="token keyword">$&</span>')
            .replace(/\b(string|number|boolean|any|void|null|undefined|never|unknown|object|Array|Promise)\b/g, '<span class="token type">$&</span>')
            .replace(/"[^"]*"|'[^']*'|`[^`]*`/g, '<span class="token string">$&</span>')
            .replace(/\b\d+\b/g, '<span class="token number">$&</span>')
            .replace(/\/\/.*$/gm, '<span class="token comment">$&</span>');
    }
    
    codeElement.innerHTML = code;
}
