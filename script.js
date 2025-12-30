// ============================================
// Nexus API Documentation - Script
// ============================================

// Global state
const state = {
    currentPage: 'about',
    currentTheme: localStorage.getItem('theme') || 'dark',
    searchData: [],
    isMobileMenuOpen: false
};

// Complete content data with all modules
const contentData = {
    // About page
    about: {
        title: 'Nexus Remote Framework',
        content: `
            <div class="content-section">
                <h1>About Nexus</h1>
                <p class="lead-text">Enterprise-grade remote communication system for Roblox with advanced security, performance, and reliability features.</p>
                
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
        `
    },

    // Getting Started page
    'getting-started': {
        title: 'Getting Started',
        content: `
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
    ├── promise.lua
    ├── memorypool.lua
    └── circuitbreaker.lua</code></pre>
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
        `
    },

    // Architecture page
    architecture: {
        title: 'Architecture',
        content: `
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
                            <td><strong>Promise</strong></td>
                            <td>Async handling</td>
                            <td>Promise/A+ implementation, async/await support</td>
                        </tr>
                        <tr>
                            <td><strong>MemoryPool</strong></td>
                            <td>Performance</td>
                            <td>Object pooling, memory optimization</td>
                        </tr>
                        <tr>
                            <td><strong>CircuitBreaker</strong></td>
                            <td>Fault tolerance</td>
                            <td>Failure detection, automatic recovery</td>
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
        `
    },

    // NexusRemote API
    nexusremote: {
        title: 'NexusRemote Class',
        content: `
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
        `
    },

    // Initialize page
    initialization: {
        title: 'Initialize Method',
        content: `
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
        `
    },

    // RegisterRemote page
    'register-remote': {
        title: 'RegisterRemote Method',
        content: `
            <div class="content-section">
                <h1>RegisterRemote Method</h1>
                <p class="lead-text">Registers a new remote event or function with Nexus.</p>
                
                <div class="method-badge both">
                    <span>Method</span>
                </div>
                
                <h2>Syntax</h2>
                <div class="code-block-inline">
                    <pre><code>nexus:RegisterRemote(name: string, remoteType: "Event" | "Function", config: RemoteConfig?): NexusRemote</code></pre>
                </div>
                
                <h2>Parameters</h2>
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
                            <td><span class="param-name">name</span></td>
                            <td><span class="param-type">string</span></td>
                            <td><span class="param-required required">Required</span></td>
                            <td class="param-desc">Unique name for the remote</td>
                        </tr>
                        <tr>
                            <td><span class="param-name">remoteType</span></td>
                            <td><span class="param-type">"Event" | "Function"</span></td>
                            <td><span class="param-required required">Required</span></td>
                            <td class="param-desc">Type of remote to create</td>
                        </tr>
                        <tr>
                            <td><span class="param-name">config</span></td>
                            <td><span class="param-type">RemoteConfig?</span></td>
                            <td><span class="param-required optional">Optional</span></td>
                            <td class="param-desc">Configuration for the remote</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>RemoteConfig Options</h2>
                <div class="code-block-inline">
                    <pre><code>type RemoteConfig = {
    rateLimit: {
        client: number?,      -- Calls per window (client-side)
        server: number?,      -- Calls per window (server-side)
        window: number?,      -- Time window in seconds
        adaptive: boolean?    -- Adaptive rate limiting
    },
    schema: Schema?,          -- Validation schema
    middleware: {string}?,    -- Middleware chain
    timeout: number?,         -- Timeout in seconds
    security: {
        requireAuth: boolean?,
        requireSignature: boolean?,
        maxSize: number?
    }
}</code></pre>
                </div>
                
                <h2>Examples</h2>
                
                <h3>Simple Event Registration</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:RegisterRemote("PlayerChat", "Event", {
    rateLimit = {
        client = 10,   -- 10 calls per window
        server = 100,  -- 100 calls per window
        window = 1     -- 1 second window
    },
    schema = {
        "string",      -- message
        "number"       -- timestamp
    }
})</code></pre>
                </div>
                
                <h3>Function with Schema</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:RegisterRemote("GetPlayerData", "Function", {
    schema = {
        playerId = "number",
        dataType = "string"
    },
    timeout = 5,
    middleware = {"auth", "logging"}
})</code></pre>
                </div>
                
                <h3>Complex Schema Example</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:RegisterRemote("UpdateInventory", "Event", {
    schema = {
        items = {"table", {
            id = "number",
            count = "number",
            metadata = {"table", {
                rarity = "string",
                durability = "number?"
            }}
        }},
        timestamp = "number",
        source = "string"
    },
    rateLimit = {
        client = 5,
        server = 50,
        window = 2,
        adaptive = true
    }
})</code></pre>
                </div>
                
                <h2>Schema Types</h2>
                <p>Nexus supports the following schema types:</p>
                
                <table class="param-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>"string"</code></td>
                            <td>String value</td>
                            <td><code>"Hello"</code></td>
                        </tr>
                        <tr>
                            <td><code>"number"</code></td>
                            <td>Numeric value</td>
                            <td><code>42</code></td>
                        </tr>
                        <tr>
                            <td><code>"boolean"</code></td>
                            <td>Boolean value</td>
                            <td><code>true</code></td>
                        </tr>
                        <tr>
                            <td><code>"table"</code></td>
                            <td>Lua table</td>
                            <td><code>{}</code></td>
                        </tr>
                        <tr>
                            <td><code>"Vector3"</code></td>
                            <td>Roblox Vector3</td>
                            <td><code>Vector3.new(0, 0, 0)</code></td>
                        </tr>
                        <tr>
                            <td><code>"CFrame"</code></td>
                            <td>Roblox CFrame</td>
                            <td><code>CFrame.new()</code></td>
                        </tr>
                        <tr>
                            <td><code>"Instance"</code></td>
                            <td>Roblox Instance</td>
                            <td><code>workspace.Part</code></td>
                        </tr>
                        <tr>
                            <td><code>{"type"}</code></td>
                            <td>Array of type</td>
                            <td><code>{"string"}</code> for string array</td>
                        </tr>
                        <tr>
                            <td><code>{key = "type"}</code></td>
                            <td>Dictionary schema</td>
                            <td><code>{x = "number", y = "number"}</code></td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="info-box info">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Note:</strong> Remote names must be unique. Registering a remote with the same name will overwrite the previous registration.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Event Handlers page
    handlers: {
        title: 'Event Handlers',
        content: `
            <div class="content-section">
                <h1>Event Handlers</h1>
                <p class="lead-text">Learn how to set up handlers for incoming remote calls with proper error handling and async support.</p>
                
                <div class="method-badge both">
                    <span>Method</span>
                </div>
                
                <h2>Syntax</h2>
                <div class="code-block-inline">
                    <pre><code>nexus:On(remoteName: string, handler: (player: Player?, ...any) -> any, options: {
    async: boolean?,
    timeout: number?
}?): NexusRemote</code></pre>
                </div>
                
                <h2>Parameters</h2>
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
                            <td><span class="param-name">remoteName</span></td>
                            <td><span class="param-type">string</span></td>
                            <td><span class="param-required required">Required</span></td>
                            <td class="param-desc">Name of the remote to handle</td>
                        </tr>
                        <tr>
                            <td><span class="param-name">handler</span></td>
                            <td><span class="param-type">function</span></td>
                            <td><span class="param-required required">Required</span></td>
                            <td class="param-desc">Function to handle incoming calls</td>
                        </tr>
                        <tr>
                            <td><span class="param-name">options</span></td>
                            <td><span class="param-type">table?</span></td>
                            <td><span class="param-required optional">Optional</span></td>
                            <td class="param-desc">Handler configuration options</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Handler Function Signature</h2>
                <div class="code-block-inline">
                    <pre><code>-- Server-side handler
function handler(player: Player, ...args: any): any

-- Client-side handler  
function handler(...args: any): any</code></pre>
                </div>
                
                <h2>Examples</h2>
                
                <h3>Basic Event Handler</h3>
                <div class="code-block-inline">
                    <pre><code>-- Register remote first
nexus:RegisterRemote("PlayerChat", "Event", {
    schema = {"string", "number"}
})

-- Set up handler
nexus:On("PlayerChat", function(player, message, timestamp)
    print(\`\${player.Name}: \${message} (\${timestamp})\`)
    
    -- Broadcast to other players
    nexus:FireExcept("ChatMessage", player, player.Name, message)
end)</code></pre>
                </div>
                
                <h3>Function Handler with Return Value</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:RegisterRemote("GetPlayerStats", "Function", {
    schema = {"string"}
})

nexus:On("GetPlayerStats", function(player, statType)
    local stats = {
        health = 100,
        level = 10,
        experience = 4500
    }
    
    return {
        success = true,
        data = stats[statType] or 0,
        timestamp = os.time()
    }
end)</code></pre>
                </div>
                
                <h3>Async Handler with Timeout</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:On("ProcessData", function(player, data)
    -- Process data asynchronously
    local result = processDataAsync(data)
    return result
end, {
    async = true,
    timeout = 10  -- 10 second timeout
})</code></pre>
                </div>
                
                <h3>Error Handling in Handlers</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:On("PurchaseItem", function(player, itemId, quantity)
    -- Validate input
    if quantity <= 0 then
        return {
            success = false,
            error = "Invalid quantity",
            code = "INVALID_QUANTITY"
        }
    end
    
    -- Check if player can afford
    local playerData = getPlayerData(player)
    local itemPrice = getItemPrice(itemId) * quantity
    
    if playerData.money < itemPrice then
        return {
            success = false,
            error = "Insufficient funds",
            code = "INSUFFICIENT_FUNDS"
        }
    end
    
    -- Process purchase
    playerData.money = playerData.money - itemPrice
    addItemToInventory(player, itemId, quantity)
    
    return {
        success = true,
        newBalance = playerData.money,
        purchased = {itemId, quantity}
    }
end)</code></pre>
                </div>
                
                <h2>Best Practices</h2>
                
                <h3>1. Validate Inputs</h3>
                <p>Always validate inputs in your handlers, even with schema validation:</p>
                <div class="code-block-inline">
                    <pre><code>nexus:On("UpdatePosition", function(player, position)
    -- Additional validation beyond schema
    if not position or typeof(position) ~= "Vector3" then
        return {success = false, error = "Invalid position"}
    end
    
    if position.Magnitude > 1000 then
        return {success = false, error = "Position out of bounds"}
    end
    
    -- Process valid position
    player.Character.HumanoidRootPart.Position = position
    return {success = true}
end)</code></pre>
                </div>
                
                <h3>2. Use Structured Responses</h3>
                <p>Always return structured responses for functions:</p>
                <div class="code-block-inline">
                    <pre><code>return {
    success = true,
    data = result,
    metadata = {
        processedAt = os.time(),
        version = "1.0"
    }
}

-- Or for errors:
return {
    success = false,
    error = "Error message",
    code = "ERROR_CODE",
    timestamp = os.time()
}</code></pre>
                </div>
                
                <h3>3. Handle Async Operations Properly</h3>
                <div class="code-block-inline">
                    <pre><code>nexus:On("SaveGame", function(player)
    -- Use spawn for async operations
    task.spawn(function()
        local success = savePlayerDataAsync(player)
        if success then
            nexus:FireClient("SaveComplete", player, true)
        else
            nexus:FireClient("SaveComplete", player, false, "Save failed")
        end
    end)
    
    return {success = true, message = "Save started"}
end, {async = true})</code></pre>
                </div>
                
                <div class="info-box warning">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Important:</strong> Always use <code>task.spawn()</code> for long-running operations in async handlers to prevent blocking the main thread.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Fire Events page
    fire: {
        title: 'Fire Events',
        content: `
            <div class="content-section">
                <h1>Fire Events</h1>
                <p class="lead-text">Learn how to send events between client and server using Nexus.</p>
                
                <h2>Available Methods</h2>
                
                <div class="method-badge client">
                    <span>Client → Server</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>nexus:Fire(remoteName: string, ...any): boolean</code></pre>
                </div>
                
                <div class="method-badge server">
                    <span>Server → Client</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>nexus:FireClient(remoteName: string, player: Player, ...any): boolean</code></pre>
                </div>
                
                <div class="method-badge server">
                    <span>Server → All Clients</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>nexus:FireAllClients(remoteName: string, ...any): boolean</code></pre>
                </div>
                
                <div class="method-badge server">
                    <span>Server → All Except One</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>nexus:FireExcept(remoteName: string, exceptPlayer: Player, ...any): boolean</code></pre>
                </div>
                
                <h2>Examples</h2>
                
                <h3>Client to Server</h3>
                <div class="code-block-inline">
                    <pre><code>-- Client: Send player action
local nexus = require(ReplicatedStorage.Nexus.init).GetInstance()

-- Simple event
nexus:Fire("PlayerJumped", os.time())

-- With multiple arguments
nexus:Fire("PlayerChat", "Hello everyone!", os.time(), "general")

-- With structured data
nexus:Fire("PlayerUpdate", {
    position = game.Players.LocalPlayer.Character.HumanoidRootPart.Position,
    health = 100,
    stamina = 75
})</code></pre>
                </div>
                
                <h3>Server to Specific Client</h3>
                <div class="code-block-inline">
                    <pre><code>-- Server: Send private message to player
nexus:FireClient("PrivateMessage", player, "Welcome to the game!")

-- Send player their stats
nexus:FireClient("PlayerStats", player, {
    health = 100,
    level = 10,
    experience = 4500,
    inventory = {"sword", "shield", "potion"}
})

-- Notify player of achievement
nexus:FireClient("AchievementUnlocked", player, 
    "First Kill", 
    "Killed your first enemy",
    100  -- XP reward
)</code></pre>
                </div>
                
                <h3>Server to All Clients</h3>
                <div class="code-block-inline">
                    <pre><code>-- Broadcast game state update
nexus:FireAllClients("GameStateUpdate", {
    time = game:GetService("Lighting").ClockTime,
    weather = "sunny",
    gamePhase = "playing",
    playersAlive = #game:GetService("Players"):GetPlayers()
})

-- Announcement to all players
nexus:FireAllClients("Announcement", 
    "Server Maintenance", 
    "Server will restart in 5 minutes for maintenance.",
    os.time() + 300  -- 5 minutes from now
)

-- Global event
nexus:FireAllClients("GlobalEvent", "earthquake", {
    intensity = 7.5,
    duration = 10,
    affectedZones = {"zone1", "zone2"}
})</code></pre>
                </div>
                
                <h3>Server to All Except One</h3>
                <div class="code-block-inline">
                    <pre><code>-- Broadcast chat message to everyone except sender
nexus:On("PlayerChat", function(player, message)
    -- Send to all players except the one who sent it
    nexus:FireExcept("ChatMessage", player, player.Name, message, os.time())
end)

-- Player joined - notify others
game:GetService("Players").PlayerAdded:Connect(function(player)
    task.wait(1)  -- Wait for player to load
    
    -- Notify existing players about new player
    nexus:FireExcept("PlayerJoined", player, player.Name, player.UserId)
    
    -- Send existing players to new player
    for _, otherPlayer in pairs(game:GetService("Players"):GetPlayers()) do
        if otherPlayer ~= player then
            nexus:FireClient("PlayerOnline", player, otherPlayer.Name, otherPlayer.UserId)
        end
    end
end)</code></pre>
                </div>
                
                <h2>Error Handling</h2>
                <p>Fire methods return a boolean indicating success:</p>
                
                <div class="code-block-inline">
                    <pre><code>-- Check if fire was successful
local success = nexus:Fire("PlayerAction", "jump")

if not success then
    warn("Failed to send PlayerAction event")
    -- Handle failure (rate limit, security violation, etc.)
end

-- With rate limit checking
local function safeFire(remoteName, ...)
    local success = nexus:Fire(remoteName, ...)
    
    if not success then
        -- Log the failure
        warn(\`Failed to fire \${remoteName}\`)
        
        -- Optionally retry
        task.wait(0.1)
        return nexus:Fire(remoteName, ...)
    end
    
    return true
end

-- Usage
safeFire("ImportantUpdate", data)</code></pre>
                </div>
                
                <h2>Performance Tips</h2>
                
                <h3>1. Batch Similar Events</h3>
                <div class="code-block-inline">
                    <pre><code>-- Instead of sending multiple position updates:
for i = 1, 10 do
    nexus:Fire("PositionUpdate", player, position)
end

-- Batch them:
nexus:EnableBatching("PositionUpdate", 0.1, 50)
nexus:Fire("PositionUpdate", player, position)
-- Multiple fires will be batched and sent together</code></pre>
                </div>
                
                <h3>2. Use Compression for Large Data</h3>
                <div class="code-block-inline">
                    <pre><code>-- Large data sets should be compressed
local largeData = {
    -- ... large table
}

nexus:Fire("LargeUpdate", nexus.serializer:Compress(largeData))</code></pre>
                </div>
                
                <h3>3. Prioritize Critical Events</h3>
                <div class="code-block-inline">
                    <pre><code>-- Register with priority
nexus:RegisterRemote("CriticalEvent", "Event", {
    performance = {
        priority = 10  -- Higher priority = processed first
    }
})

-- Normal priority events
nexus:RegisterRemote("NormalEvent", "Event", {
    performance = {
        priority = 5  -- Default priority
    }
})</code></pre>
                </div>
                
                <div class="info-box info">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Tip:</strong> Events are fire-and-forget. For guaranteed delivery, use functions with return confirmation.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Invoke Functions page
    invoke: {
        title: 'Invoke Functions',
        content: `
            <div class="content-section">
                <h1>Invoke Functions</h1>
                <p class="lead-text">Learn how to invoke remote functions and handle responses with Nexus.</p>
                
                <h2>Available Methods</h2>
                
                <div class="method-badge client">
                    <span>Client → Server</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>local response = nexus:Invoke(remoteName: string, ...any): any</code></pre>
                </div>
                
                <div class="method-badge server">
                    <span>Server → Client</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>local response = nexus:InvokeClient(remoteName: string, player: Player, ...any): any</code></pre>
                </div>
                
                <div class="method-badge both">
                    <span>Async Invocation</span>
                </div>
                <div class="code-block-inline">
                    <pre><code>local promise = nexus:InvokeAsync(remoteName: string, ...any): Promise</code></pre>
                </div>
                
                <h2>Examples</h2>
                
                <h3>Basic Invoke (Client to Server)</h3>
                <div class="code-block-inline">
                    <pre><code>-- Client: Request player data
local result = nexus:Invoke("GetPlayerData", "inventory")

if result.success then
    print("Inventory:", result.data)
else
    warn("Failed:", result.error)
end

-- With multiple arguments
local stats = nexus:Invoke("GetPlayerStats", "health", "level", "experience")

-- With timeout handling
local function safeInvoke(remoteName, ...)
    local success, result = pcall(function()
        return nexus:Invoke(remoteName, ...)
    end)
    
    if not success then
        warn(\`Invoke failed for \${remoteName}: \${result}\`)
        return {success = false, error = "Invocation failed"}
    end
    
    return result
end

local data = safeInvoke("GetData", "key")</code></pre>
                </div>
                
                <h3>Server to Client Invocation</h3>
                <div class="code-block-inline">
                    <pre><code>-- Server: Request data from client
local clientData = nexus:InvokeClient("GetClientInfo", player)

if clientData.success then
    print(\`Client info for \${player.Name}:\`, clientData.data)
    
    -- Use the data
    local fps = clientData.data.fps or 60
    local ping = clientData.data.ping or 100
    
    if fps < 30 then
        warn(\`\${player.Name} has low FPS: \${fps}\`)
    end
else
    warn(\`Failed to get client info from \${player.Name}: \${clientData.error}\`)
end

-- Request client settings
local settings = nexus:InvokeClient("GetSettings", player)

-- Validate and use settings
if settings.success then
    applyPlayerSettings(player, settings.data)
end</code></pre>
                </div>
                
                <h3>Async Invocation with Promises</h3>
                <div class="code-block-inline">
                    <pre><code>-- Using InvokeAsync for better async handling
local Promise = require(ReplicatedStorage.Nexus.promise)

-- Basic async invoke
nexus:InvokeAsync("GetPlayerData", "inventory")
    :andThen(function(result)
        if result.success then
            print("Got inventory:", result.data)
        else
            warn("Failed:", result.error)
        end
    end)
    :catch(function(error)
        warn("Invoke failed:", error)
    end)

-- Multiple async invocations
Promise.all({
    nexus:InvokeAsync("GetPlayerStats", "health"),
    nexus:InvokeAsync("GetPlayerStats", "level"),
    nexus:InvokeAsync("GetPlayerStats", "experience")
})
:andThen(function(results)
    local health = results[1]
    local level = results[2]
    local exp = results[3]
    
    print(\`Player stats: \${health.data} HP, Level \${level.data}, \${exp.data} XP\`)
end)
:catch(function(error)
    warn("Failed to get player stats:", error)
end)</code></pre>
                </div>
                
                <h3>Batch Invocations</h3>
                <div class="code-block-inline">
                    <pre><code>-- Batch multiple requests
local requests = {
    {"GetPlayerData", "inventory"},
    {"GetPlayerData", "stats"},
    {"GetPlayerData", "achievements"}
}

nexus:BatchInvoke("GetPlayerData", requests)
    :andThen(function(results)
        for i, result in ipairs(results) do
            if result.success then
                print(\`Request \${i} succeeded:\`, result.data)
            end
        end
    end)
    :catch(function(error)
        warn("Batch invoke failed:", error)
    end)

-- Alternative batch pattern
local function batchInvoke(requests)
    local promises = {}
    
    for _, request in ipairs(requests) do
        table.insert(promises, nexus:InvokeAsync(unpack(request)))
    end
    
    return Promise.all(promises)
end</code></pre>
                </div>
                
                <h2>Error Handling Patterns</h2>
                
                <h3>1. Structured Error Responses</h3>
                <div class="code-block-inline">
                    <pre><code>-- Server handler with error cases
nexus:On("PurchaseItem", function(player, itemId, quantity)
    -- Validate input
    if not itemId or type(itemId) ~= "string" then
        return {
            success = false,
            error = "Invalid item ID",
            code = "INVALID_ITEM_ID"
        }
    end
    
    if quantity <= 0 then
        return {
            success = false,
            error = "Invalid quantity",
            code = "INVALID_QUANTITY"
        }
    end
    
    -- Check availability
    local available = checkItemAvailability(itemId, quantity)
    if not available then
        return {
            success = false,
            error = "Item out of stock",
            code = "OUT_OF_STOCK",
            retryAfter = 60  -- seconds
        }
    end
    
    -- Process purchase
    local success, purchaseId = processPurchase(player, itemId, quantity)
    
    if success then
        return {
            success = true,
            data = {
                purchaseId = purchaseId,
                itemId = itemId,
                quantity = quantity,
                timestamp = os.time()
            }
        }
    else
        return {
            success = false,
            error = "Purchase failed",
            code = "PURCHASE_FAILED"
        }
    end
end)</code></pre>
                </div>
                
                <h3>2. Client-Side Error Handling</h3>
                <div class="code-block-inline">
                    <pre><code>-- Client: Comprehensive error handling
local function safePurchase(itemId, quantity)
    local result = nexus:Invoke("PurchaseItem", itemId, quantity)
    
    if not result.success then
        -- Handle specific error codes
        if result.code == "INVALID_ITEM_ID" then
            showError("Invalid item selected")
        elseif result.code == "INVALID_QUANTITY" then
            showError("Please enter a valid quantity")
        elseif result.code == "OUT_OF_STOCK" then
            showError("Item out of stock")
            
            -- Schedule retry if available
            if result.retryAfter then
                task.delay(result.retryAfter, function()
                    safePurchase(itemId, quantity)
                end)
            end
        elseif result.code == "PURCHASE_FAILED" then
            showError("Purchase failed, please try again")
        else
            showError("An error occurred: " .. (result.error or "Unknown"))
        end
        
        return false
    end
    
    -- Success
    showSuccess(\`Purchased \${quantity}x \${itemId}!\`)
    updateInventory(result.data)
    return true
end</code></pre>
                </div>
                
                <h3>3. Timeout Handling</h3>
                <div class="code-block-inline">
                    <pre><code>-- Custom timeout wrapper
local function invokeWithTimeout(remoteName, timeout, ...)
    local Promise = require(ReplicatedStorage.Nexus.promise)
    
    local invokePromise = nexus:InvokeAsync(remoteName, ...)
    local timeoutPromise = Promise.new(function(resolve)
        task.delay(timeout, function()
            resolve({
                success = false,
                error = "Request timeout",
                code = "TIMEOUT"
            })
        end)
    end)
    
    return Promise.race({invokePromise, timeoutPromise})
end

-- Usage
invokeWithTimeout("GetPlayerData", 5, "inventory")
    :andThen(function(result)
        if result.success then
            print("Got data:", result.data)
        else
            warn("Failed or timed out:", result.error)
        end
    end)</code></pre>
                </div>
                
                <h2>Best Practices</h2>
                
                <div class="info-box success">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Always check the success field</strong> in responses before accessing data fields.</p>
                    </div>
                </div>
                
                <div class="info-box warning">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Use appropriate timeouts</strong> based on the expected processing time of the remote function.</p>
                    </div>
                </div>
                
                <div class="info-box info">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Consider using InvokeAsync</strong> for better async control and error handling compared to regular Invoke.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Security Module page
    security: {
        title: 'Security Module',
        content: `
            <div class="content-section">
                <h1>Security Module</h1>
                <p class="lead-text">Advanced security features including packet signing, validation, threat detection, and player trust management.</p>
                
                <div class="method-badge server">
                    <span>Module</span>
                </div>
                
                <h2>Overview</h2>
                <p>The Security module provides comprehensive security features for Nexus:</p>
                <ul>
                    <li><strong>Packet Security</strong> - Signing, validation, and integrity checks</li>
                    <li><strong>Threat Detection</strong> - Exploit pattern detection and prevention</li>
                    <li><strong>Player Management</strong> - Trust scores, session management, violation tracking</li>
                    <li><strong>Rate Limiting</strong> - Integrated with RateLimiter module</li>
                    <li><strong>Auto-Ban System</strong> - Automatic banning for repeated violations</li>
                </ul>
                
                <h2>Initialization</h2>
                <div class="code-block-inline">
                    <pre><code>-- Basic initialization
local Security = require(ReplicatedStorage.Nexus.security)
local security = Security.new()
security:Initialize({
    threatDetection = true,
    autoBanThreshold = 10,
    packetTTL = 10,
    enableSignatureVerification = true
})</code></pre>
                </div>
                
                <h2>Core Features</h2>
                
                <h3>1. Packet Signing and Validation</h3>
                <div class="code-block-inline">
                    <pre><code>-- Sign a packet
local packet = {
    id = HttpService:GenerateGUID(false),
    timestamp = os.time(),
    data = {playerId = 123, action = "jump"}
}

local signature = security:SignPacket(packet, player)

-- Verify a packet
local isValid = security:VerifyPacket(packet, player, "PlayerAction")
if not isValid then
    security:RecordViolation(player, "PlayerAction", "Invalid packet signature")
    return
end

-- Create and sign complete packet
local securePacket = security:CreateSecurePacket(
    "PlayerAction", 
    player, 
    {action = "jump", timestamp = os.time()}
)</code></pre>
                </div>
                
                <h3>2. Player Trust Management</h3>
                <div class="code-block-inline">
                    <pre><code>-- Initialize player (call when player joins)
security:InitializePlayer(player)

-- Get/Set trust score
local trustScore = security:GetTrustScore(player)
security:SetTrustScore(player, trustScore + 0.1)  -- Reward good behavior

-- Check if player is trusted
if security:GetTrustScore(player) > 0.7 then
    -- Player is highly trusted, allow special actions
    allowSpecialAction(player)
end

-- Session management
local sessionId = security:CreateSession(player)
local isValid = security:ValidateSession(sessionId, player)</code></pre>
                </div>
                
                <h3>3. Violation Tracking</h3>
                <div class="code-block-inline">
                    <pre><code>-- Record violations
security:RecordViolation(player, "PlayerChat", "Rate limit exceeded")
security:RecordSuspiciousActivity(player, "PlayerAction", "Unusual packet size")

-- Check violation count
local violations = security:GetViolationCount(player)
if violations > 5 then
    warn(\`Player \${player.Name} has \${violations} violations\`)
end

-- Auto-ban on threshold
-- Configured in Initialize: autoBanThreshold = 10
-- After 10 violations, player is automatically banned</code></pre>
                </div>
                
                <h3>4. Threat Detection</h3>
                <div class="code-block-inline">
                    <pre><code>-- Check for exploit patterns
local hasExploit, pattern = security:DetectExploitPatterns(packet)
if hasExploit then
    security:RecordViolation(player, nil, \`Exploit pattern: \${pattern}\`)
    security:FlagPlayer(player, "Exploit attempt")
    return false
end

-- Validate data structure
local isValid, reason = security:ValidateDataStructure(data, 0)
if not isValid then
    security:RecordSuspiciousActivity(player, nil, \`Invalid structure: \${reason}\`)
    return false
end</code></pre>
                </div>
                
                <h2>Configuration Options</h2>
                <table class="param-table">
                    <thead>
                        <tr>
                            <th>Option</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>threatDetection</code></td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enable exploit pattern detection</td>
                        </tr>
                        <tr>
                            <td><code>autoBanThreshold</code></td>
                            <td>number</td>
                            <td>10</td>
                            <td>Violations before auto-ban</td>
                        </tr>
                        <tr>
                            <td><code>autoBanDuration</code></td>
                            <td>number</td>
                            <td>3600</td>
                            <td>Ban duration in seconds (1 hour)</td>
                        </tr>
                        <tr>
                            <td><code>packetTTL</code></td>
                            <td>number</td>
                            <td>10</td>
                            <td>Packet time-to-live in seconds</td>
                        </tr>
                        <tr>
                            <td><code>enableSignatureVerification</code></td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Verify packet signatures</td>
                        </tr>
                        <tr>
                            <td><code>enableKeyRotation</code></td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Rotate encryption keys periodically</td>
                        </tr>
                        <tr>
                            <td><code>sessionTimeout</code></td>
                            <td>number</td>
                            <td>300</td>
                            <td>Session timeout in seconds (5 minutes)</td>
                        </tr>
                        <tr>
                            <td><code>minTrustScore</code></td>
                            <td>number</td>
                            <td>0.1</td>
                            <td>Minimum trust score (0-1)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Complete Example</h2>
                <div class="code-block-inline">
                    <pre><code>-- Complete security setup example
local Security = require(ReplicatedStorage.Nexus.security)

-- Create and configure security
local security = Security.new()
security:Initialize({
    threatDetection = true,
    autoBanThreshold = 10,
    autoBanDuration = 7200,  -- 2 hour bans
    packetTTL = 15,
    enableSignatureVerification = true,
    enableKeyRotation = true,
    sessionTimeout = 600,  -- 10 minutes
    minTrustScore = 0.2,
    debug = game:GetService("RunService"):IsStudio()
})

-- Player join handler
game:GetService("Players").PlayerAdded:Connect(function(player)
    -- Initialize player security
    security:InitializePlayer(player)
    
    -- Set initial trust based on account age
    local accountAge = player.AccountAge or 0
    local trustScore = math.min(1.0, accountAge / 365)  -- 1 year = full trust
    security:SetTrustScore(player, trustScore)
    
    print(\`Player \${player.Name} initialized with trust score: \${trustScore}\`)
end)

-- Packet validation middleware
nexus:UseMiddleware("security", function(context)
    local player = context.player
    local packet = context.packet
    
    -- Basic validation
    if not security:ValidatePacket(packet, player, context.remote) then
        return false, "Invalid packet"
    end
    
    -- Signature verification
    if not security:VerifyPacket(packet, player, context.remote) then
        security:RecordViolation(player, context.remote, "Invalid signature")
        return false, "Security violation"
    end
    
    -- Trust score check
    local trustScore = security:GetTrustScore(player)
    if trustScore < 0.3 then
        -- Low trust players have stricter limits
        -- You could apply additional restrictions here
    end
    
    return true
end)</code></pre>
                </div>
                
                <h2>Reporting and Monitoring</h2>
                <div class="code-block-inline">
                    <pre><code>-- Generate security report
local report = security:GenerateReport({
    detailed = true,
    player = specificPlayer  -- Optional: get report for specific player
})

print("Security Report:")
print("Total violations:", report.summary.totalViolations)
print("Active sessions:", report.summary.activeSessions)
print("Blacklisted players:", report.summary.blacklistedPlayers)
print("Average trust score:", report.summary.averageTrustScore)

-- Player-specific report
if report.player then
    print(\`Player \${report.player.username}:\`)
    print("  Trust score:", report.player.trustScore)
    print("  Is blacklisted:", report.player.isBlacklisted)
    print("  Session ID:", report.player.sessionId)
    
    if report.player.violations then
        print("  Violation count:", report.player.violations.count)
    end
end</code></pre>
                </div>
                
                <div class="info-box warning">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Important:</strong> Always enable signature verification in production. Test security configurations thoroughly in a controlled environment before deployment.</p>
                    </div>
                </div>
                
                <div class="info-box info">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Tip:</strong> Use trust scores to implement progressive security measures. Low-trust players get stricter limits, high-trust players get more freedom.</p>
                    </div>
                </div>
            </div>
        `
    },

    // MemoryPool page
    memorypool: {
        title: 'MemoryPool Module',
        content: `
            <div class="content-section">
                <h1>MemoryPool Module</h1>
                <p class="lead-text">Object pooling system for efficient memory management and reduced garbage collection overhead.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Overview</h2>
                <p>The MemoryPool module reduces garbage collection pressure by reusing objects instead of creating and destroying them:</p>
                <ul>
                    <li><strong>Object Pooling</strong> - Reuse frequently created objects</li>
                    <li><strong>Memory Efficiency</strong> - Reduce allocation and GC overhead</li>
                    <li><strong>Performance Boost</strong> - Faster object creation/destruction</li>
                    <li><strong>Configurable Pools</strong> - Multiple pools for different object types</li>
                </ul>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>-- Basic initialization
local MemoryPool = require(ReplicatedStorage.Nexus.memorypool)
local pool = MemoryPool.new()
pool:Initialize(1000)  -- Create pool with 1000 objects capacity</code></pre>
                </div>
                
                <h2>Core Methods</h2>
                
                <h3>1. Acquire Objects</h3>
                <div class="code-block-inline">
                    <pre><code>-- Acquire from pool
local packet = pool:Acquire("packet", function()
    -- Initializer function (called when new object is created)
    return {
        id = "",
        timestamp = 0,
        data = {},
        metadata = {}
    }
end)

-- Use the object
packet.id = HttpService:GenerateGUID(false)
packet.timestamp = os.clock()
packet.data = {playerId = 123, action = "jump"}

-- Acquire table
local tempTable = pool:Acquire("table")
table.insert(tempTable, "item1")
table.insert(tempTable, "item2")</code></pre>
                </div>
                
                <h3>2. Release Objects</h3>
                <div class="code-block-inline">
                    <pre><code>-- Release back to pool when done
pool:Release("packet", packet)

-- Release table
pool:Release("table", tempTable)

-- Objects are automatically cleared when released
-- No need to manually clear tables</code></pre>
                </div>
                
                <h3>3. Custom Pools</h3>
                <div class="code-block-inline">
                    <pre><code>-- Create custom pool for specific object type
local vectorPool = MemoryPool.new()
vectorPool:Initialize(500)

-- Custom initializer for Vector3 objects
local vector = vectorPool:Acquire("vector3", function()
    return Vector3.new(0, 0, 0)
end)

-- Use vector
vector = Vector3.new(10, 20, 30)

-- Release
vectorPool:Release("vector3", vector)</code></pre>
                </div>
                
                <h2>Complete Example</h2>
                <div class="code-block-inline">
                    <pre><code>-- Complete MemoryPool integration with Nexus
local MemoryPool = require(ReplicatedStorage.Nexus.memorypool)

-- Create memory pool
local pool = MemoryPool.new()
pool:Initialize(2000)  -- Pool of 2000 objects

-- Packet creation with pooling
function createPacket(remoteName, player, data)
    -- Acquire packet from pool
    local packet = pool:Acquire("packet", function()
        return {
            id = "",
            version = 2,
            timestamp = 0,
            signature = "",
            checksum = "",
            nonce = "",
            data = nil,
            metadata = {
                sender = "",
                remote = "",
                priority = 1,
                ttl = 10,
                platform = "roblox"
            }
        }
    end)
    
    -- Fill packet data
    packet.id = HttpService:GenerateGUID(false)
    packet.timestamp = os.clock()
    packet.metadata.sender = player and tostring(player.UserId) or "server"
    packet.metadata.remote = remoteName
    packet.data = data
    
    -- Calculate checksum and signature
    packet.checksum = security:CalculateChecksum(packet)
    packet.signature = security:SignPacket(packet, packet.metadata.sender)
    
    return packet
end

-- Packet cleanup
function cleanupPacket(packet)
    -- Release packet back to pool
    pool:Release("packet", packet)
end

-- Usage in Nexus handler
nexus:On("PlayerUpdate", function(player, updateData)
    -- Create packet using pool
    local packet = createPacket("PlayerUpdate", player, updateData)
    
    -- Process packet...
    
    -- Cleanup
    cleanupPacket(packet)
end)</code></pre>
                </div>
                
                <h2>Advanced Patterns</h2>
                
                <h3>1. Scoped Pool Usage</h3>
                <div class="code-block-inline">
                    <pre><code>-- Scoped pool usage pattern
local function withTempTable(callback)
    local tempTable = pool:Acquire("table")
    
    local success, result = pcall(callback, tempTable)
    
    -- Always release, even if callback errors
    pool:Release("table", tempTable)
    
    if not success then
        error(result)
    end
    
    return result
end

-- Usage
local processed = withTempTable(function(temp)
    -- Use temp table
    for i = 1, 100 do
        table.insert(temp, i * 2)
    end
    
    -- Process data
    return processData(temp)
end)</code></pre>
                </div>
                
                <h3>2. Pool Statistics</h3>
                <div class="code-block-inline">
                    <pre><code>-- Track pool usage
local poolStats = {
    acquisitions = 0,
    releases = 0,
    hits = 0,      -- Object from pool
    misses = 0     -- New object created
}

-- Wrap acquire to track
local originalAcquire = pool.Acquire
function pool:Acquire(poolName, initializer)
    poolStats.acquisitions = poolStats.acquisitions + 1
    
    local poolData = self.pools[poolName]
    if poolData and #poolData.objects > 0 then
        poolStats.hits = poolStats.hits + 1
    else
        poolStats.misses = poolStats.misses + 1
    end
    
    return originalAcquire(self, poolName, initializer)
end

-- Print stats periodically
task.spawn(function()
    while true do
        task.wait(60)
        print("Pool Stats:")
        print("  Acquisitions:", poolStats.acquisitions)
        print("  Releases:", poolStats.releases)
        print("  Hits:", poolStats.hits)
        print("  Misses:", poolStats.misses)
        print("  Hit Rate:", poolStats.hits / math.max(1, poolStats.acquisitions))
    end
end)</code></pre>
                </div>
                
                <h2>Performance Comparison</h2>
                
                <table class="param-table">
                    <thead>
                        <tr>
                            <th>Operation</th>
                            <th>Without Pool</th>
                            <th>With Pool</th>
                            <th>Improvement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table Creation</td>
                            <td>Allocates new memory</td>
                            <td>Reuses existing memory</td>
                            <td>10-100x faster</td>
                        </tr>
                        <tr>
                            <td>Garbage Collection</td>
                            <td>Frequent GC pauses</td>
                            <td>Reduced GC pressure</td>
                            <td>50-90% less GC time</td>
                        </tr>
                        <tr>
                            <td>Memory Usage</td>
                            <td>High, fluctuating</td>
                            <td>Stable, predictable</td>
                            <td>Better memory profile</td>
                        </tr>
                        <tr>
                            <td>Packet Creation</td>
                            <td>~0.5ms per packet</td>
                            <td>~0.05ms per packet</td>
                            <td>10x faster</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Best Practices</h2>
                
                <div class="info-box success">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Always release objects</strong> back to the pool when you're done with them to prevent memory leaks.</p>
                    </div>
                </div>
                
                <div class="info-box warning">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Don't hold references</strong> to pooled objects after releasing them. The object will be reused by other code.</p>
                    </div>
                </div>
                
                <div class="info-box info">
                    <div class="info-box-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                    </div>
                    <div class="info-box-content">
                        <p><strong>Size pools appropriately</strong> based on your expected usage. Too small = frequent allocations, too large = wasted memory.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Add more module pages here...
    'validator': {
        title: 'Validator Module',
        content: `
            <div class="content-section">
                <h1>Validator Module</h1>
                <p class="lead-text">Type validation and schema enforcement for secure data handling.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>local Validator = require(ReplicatedStorage.Nexus.validator)
local validator = Validator.new()

-- Register schema
validator:RegisterSchema("PlayerData", {
    playerId = "number",
    username = "string",
    position = "Vector3",
    inventory = {"table", {
        id = "number",
        count = "number"
    }}
})

-- Validate data
local data = {
    playerId = 123,
    username = "Player1",
    position = Vector3.new(0, 0, 0),
    inventory = {
        {id = 1, count = 5},
        {id = 2, count = 3}
    }
}

local isValid, error = validator:Validate(data, "PlayerData")
if not isValid then
    warn("Validation failed:", error)
end</code></pre>
                </div>
            </div>
        `
    },

    'serializer': {
        title: 'Serializer Module',
        content: `
            <div class="content-section">
                <h1>Serializer Module</h1>
                <p class="lead-text">Data serialization and compression for efficient network transmission.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>local Serializer = require(ReplicatedStorage.Nexus.serializer)
local serializer = Serializer.new()

-- Serialize data
local data = {
    playerId = 123,
    position = Vector3.new(10, 20, 30),
    inventory = {"sword", "shield", "potion"}
}

local serialized = serializer:Serialize(data)

-- Deserialize
local deserialized = serializer:Deserialize(serialized)

-- Compress large data
local compressed = serializer:Compress(largeData)
local decompressed = serializer:Decompress(compressed)</code></pre>
                </div>
            </div>
        `
    },

    'ratelimiter': {
        title: 'RateLimiter Module',
        content: `
            <div class="content-section">
                <h1>RateLimiter Module</h1>
                <p class="lead-text">Dual-layer rate limiting for client and server-side protection.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>local RateLimiter = require(ReplicatedStorage.Nexus.ratelimiter)
local rateLimiter = RateLimiter.new()

-- Set limits
rateLimiter:SetLimit("PlayerChat", {
    client = 10,   -- 10 calls per window client-side
    server = 100,  -- 100 calls per window server-side
    window = 1,    -- 1 second window
    adaptive = true
})

-- Check limit
local canProceed, waitTime = rateLimiter:CheckLimit("client", "PlayerChat")
if not canProceed then
    warn(\`Rate limit exceeded. Wait \${waitTime} seconds.\`)
end</code></pre>
                </div>
            </div>
        `
    },

    'promise': {
        title: 'Promise Module',
        content: `
            <div class="content-section">
                <h1>Promise Module</h1>
                <p class="lead-text">Promise/A+ implementation for asynchronous programming patterns.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>local Promise = require(ReplicatedStorage.Nexus.promise)

-- Create promise
local promise = Promise.new(function(resolve, reject)
    task.wait(1)
    resolve("Success!")
end)

-- Chain promises
promise
    :andThen(function(result)
        print("Result:", result)
        return "Processed: " .. result
    end)
    :andThen(function(processed)
        print("Processed:", processed)
    end)
    :catch(function(error)
        warn("Error:", error)
    end)

-- Multiple promises
Promise.all({
    promise1,
    promise2,
    promise3
}):andThen(function(results)
    print("All promises completed:", results)
end)</code></pre>
                </div>
            </div>
        `
    },

    'circuitbreaker': {
        title: 'CircuitBreaker Module',
        content: `
            <div class="content-section">
                <h1>CircuitBreaker Module</h1>
                <p class="lead-text">Fault tolerance pattern for remote calls with automatic recovery.</p>
                
                <div class="method-badge both">
                    <span>Module</span>
                </div>
                
                <h2>Basic Usage</h2>
                <div class="code-block-inline">
                    <pre><code>local CircuitBreaker = require(ReplicatedStorage.Nexus.circuitbreaker)
local circuitBreaker = CircuitBreaker.new()

-- Configure circuit breaker
circuitBreaker:Configure("PlayerDataService", {
    failureThreshold = 5,      -- 5 failures opens circuit
    resetTimeout = 30,         -- 30 seconds to try reset
    halfOpenMaxAttempts = 3    -- 3 attempts in half-open state
})

-- Check if can execute
if circuitBreaker:CanExecute("PlayerDataService") then
    -- Make remote call
    local success = pcall(function()
        -- Your remote call here
    end)
    
    if success then
        circuitBreaker:RecordSuccess("PlayerDataService")
    else
        circuitBreaker:RecordFailure("PlayerDataService")
    end
else
    warn("Circuit breaker open for PlayerDataService")
end</code></pre>
                </div>
            </div>
        `
    }
};

// Code examples for the code panel (Lua only)
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

print("Nexus initialized successfully!")`
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
end`
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
end`
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
end)`
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
nexus5:Initialize()  -- Prints: "[Nexus] Already initialized"`
    },
    'register-remote': {
        lua: `-- RegisterRemote examples
local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new()
nexus:Initialize()

-- Example 1: Simple event
nexus:RegisterRemote("PlayerMove", "Event", {
    schema = {"Vector3", "number"}  -- position, timestamp
})

-- Example 2: Function with rate limiting
nexus:RegisterRemote("PurchaseItem", "Function", {
    rateLimit = {
        client = 5,
        server = 20,
        window = 2,
        adaptive = true
    },
    schema = {
        itemId = "string",
        quantity = "number"
    },
    timeout = 10
})

-- Example 3: Complex schema
nexus:RegisterRemote("UpdatePlayer", "Event", {
    schema = {
        position = "Vector3",
        velocity = "Vector3",
        state = "string",
        timestamp = "number",
        metadata = {"table", {
            health = "number",
            stamina = "number",
            effects = {"string"}
        }}
    }
})`
    },
    handlers: {
        lua: `-- Handler examples
local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new()
nexus:Initialize()

-- Register remote first
nexus:RegisterRemote("PlayerAction", "Event", {
    schema = {"string", "Vector3"}
})

-- Example 1: Basic handler
nexus:On("PlayerAction", function(player, action, position)
    print(\`\${player.Name} performed \${action} at \${position}\`)
    
    -- Update game state
    if action == "jump" then
        player.Character.Humanoid.Jump = true
    end
end)

-- Example 2: Function handler with return
nexus:RegisterRemote("GetPlayerInfo", "Function", {
    schema = {"string"}
})

nexus:On("GetPlayerInfo", function(player, infoType)
    local playerData = getPlayerData(player)
    
    if infoType == "stats" then
        return {
            success = true,
            data = playerData.stats
        }
    elseif infoType == "inventory" then
        return {
            success = true,
            data = playerData.inventory
        }
    else
        return {
            success = false,
            error = "Unknown info type",
            code = "UNKNOWN_TYPE"
        }
    end
end)

-- Example 3: Async handler
nexus:On("ProcessHeavy", function(player, data)
    -- Process in background
    task.spawn(function()
        local result = processHeavyData(data)
        nexus:FireClient("ProcessingComplete", player, result)
    end)
    
    return {success = true, message = "Processing started"}
end, {async = true})`
    },
    fire: {
        lua: `-- Fire examples
local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new()
nexus:Initialize()

-- Client-side examples
if game:GetService("RunService"):IsClient() then
    -- Simple event
    nexus:Fire("PlayerChat", "Hello world!", os.time())
    
    -- With structured data
    nexus:Fire("PlayerUpdate", {
        position = game.Players.LocalPlayer.Character.HumanoidRootPart.Position,
        health = 100,
        actions = {"walk", "run", "jump"}
    })
end

-- Server-side examples
if game:GetService("RunService"):IsServer() then
    -- To specific player
    nexus:FireClient("PrivateMessage", player, "Welcome to the game!")
    
    -- To all players
    nexus:FireAllClients("GameAnnouncement", 
        "Server Maintenance", 
        "Restarting in 5 minutes",
        os.time() + 300
    )
    
    -- To all except one
    nexus:On("PlayerChat", function(sender, message)
        nexus:FireExcept("ChatMessage", sender, sender.Name, message)
    end)
end`
    },
    invoke: {
        lua: `-- Invoke examples
local Nexus = require(ReplicatedStorage.Nexus.init)
local nexus = Nexus.new()
nexus:Initialize()

-- Client to server
if game:GetService("RunService"):IsClient() then
    -- Basic invoke
    local result = nexus:Invoke("GetPlayerData", "inventory")
    
    if result.success then
        print("Inventory:", result.data)
    else
        warn("Failed:", result.error)
    end
    
    -- With timeout handling
    local function safeInvoke(remoteName, ...)
        local success, result = pcall(function()
            return nexus:Invoke(remoteName, ...)
        end)
        
        if not success then
            return {success = false, error = "Invocation failed"}
        end
        
        return result
    end
    
    local data = safeInvoke("GetData", "important")
end

-- Server to client
if game:GetService("RunService"):IsServer() then
    -- Request client info
    local clientInfo = nexus:InvokeClient("GetClientInfo", player)
    
    if clientInfo.success then
        print(\`Client FPS: \${clientInfo.data.fps}\`)
    end
end

-- Async invoke
nexus:InvokeAsync("ProcessData", largeData)
    :andThen(function(result)
        if result.success then
            print("Processed:", result.data)
        end
    end)
    :catch(function(error)
        warn("Process failed:", error)
    end)`
    },
    security: {
        lua: `-- Security module examples
local Security = require(ReplicatedStorage.Nexus.security)

-- Initialize security
local security = Security.new()
security:Initialize({
    threatDetection = true,
    autoBanThreshold = 10,
    packetTTL = 10,
    enableSignatureVerification = true
})

-- Player management
game:GetService("Players").PlayerAdded:Connect(function(player)
    security:InitializePlayer(player)
    
    -- Set trust based on account age
    local trustScore = math.min(1.0, (player.AccountAge or 0) / 365)
    security:SetTrustScore(player, trustScore)
    
    print(\`Player \${player.Name} trust: \${trustScore}\`)
end)

-- Packet validation
function validateIncomingPacket(packet, player, remoteName)
    -- Basic validation
    if not security:ValidatePacket(packet, player, remoteName) then
        return false, "Invalid packet"
    end
    
    -- Signature verification
    if not security:VerifyPacket(packet, player, remoteName) then
        security:RecordViolation(player, remoteName, "Invalid signature")
        return false, "Security violation"
    end
    
    -- Trust check
    if security:GetTrustScore(player) < 0.3 then
        -- Apply stricter validation for low-trust players
        return false, "Low trust score"
    end
    
    return true
end

-- Threat detection
local data = packet.data
local hasExploit, pattern = security:DetectExploitPatterns(data)
if hasExploit then
    security:FlagPlayer(player, \`Exploit attempt: \${pattern}\`)
    return false
end`
    },
    memorypool: {
        lua: `-- MemoryPool examples
local MemoryPool = require(ReplicatedStorage.Nexus.memorypool)

-- Initialize pool
local pool = MemoryPool.new()
pool:Initialize(1000)  -- 1000 object capacity

-- Basic usage
local packet = pool:Acquire("packet", function()
    return {
        id = "",
        timestamp = 0,
        data = {},
        metadata = {}
    }
end)

-- Use packet
packet.id = HttpService:GenerateGUID(false)
packet.timestamp = os.time()
packet.data = {playerId = 123, action = "jump"}

-- Release when done
pool:Release("packet", packet)

-- Table pooling
local tempTable = pool:Acquire("table")

-- Add data
for i = 1, 100 do
    table.insert(tempTable, i)
end

-- Process table
processData(tempTable)

-- Release table
pool:Release("table", tempTable)

-- Custom object pool
local vectorPool = MemoryPool.new()
vectorPool:Initialize(500)

local vector = vectorPool:Acquire("vector3", function()
    return Vector3.new(0, 0, 0)
end)

-- Use vector
vector = Vector3.new(10, 20, 30)

-- Release
vectorPool:Release("vector3", vector)`
    },
    'validator': {
        lua: `-- Validator examples
local Validator = require(ReplicatedStorage.Nexus.validator)
local validator = Validator.new()

-- Register custom type
validator:RegisterType("color3", function(value)
    return typeof(value) == "Color3"
end, "Color3 value")

-- Define schema
validator:RegisterSchema("PlayerUpdate", {
    position = "Vector3",
    velocity = "Vector3",
    health = "number",
    stamina = "number",
    color = "color3",  -- Custom type
    effects = {"string"},
    metadata = {"table", {
        lastUpdate = "number",
        version = "string"
    }}
})

-- Validate data
local data = {
    position = Vector3.new(0, 5, 0),
    velocity = Vector3.new(1, 0, 0),
    health = 100,
    stamina = 75,
    color = Color3.new(1, 0, 0),
    effects = {"speed", "jump"},
    metadata = {
        lastUpdate = os.time(),
        version = "1.0"
    }
}

local isValid, error = validator:Validate(data, "PlayerUpdate")
if not isValid then
    warn("Validation failed:", error)
end`
    },
    'serializer': {
        lua: `-- Serializer examples
local Serializer = require(ReplicatedStorage.Nexus.serializer)
local serializer = Serializer.new()

-- Basic serialization
local data = {
    playerId = 123,
    name = "Player1",
    position = Vector3.new(10, 20, 30),
    inventory = {
        {id = 1, name = "Sword", count = 1},
        {id = 2, name = "Shield", count = 1},
        {id = 3, name = "Potion", count = 5}
    }
}

-- Serialize
local serialized = serializer:Serialize(data)
print("Serialized size:", #serialized, "bytes")

-- Deserialize
local deserialized = serializer:Deserialize(serialized)

-- Compression
local largeData = {}
for i = 1, 1000 do
    largeData[i] = {
        id = i,
        name = "Item" .. i,
        value = math.random(1000)
    }
end

-- Compress large data
local compressed = serializer:Compress(largeData, {
    algorithm = "lz4",
    level = 9  -- Maximum compression
})

print("Original:", serializer:EstimateSize(largeData), "bytes")
print("Compressed:", #compressed, "bytes")
print("Ratio:", serializer:EstimateSize(largeData) / #compressed)

-- Decompress
local decompressed = serializer:Decompress(compressed)`
    },
    'ratelimiter': {
        lua: `-- RateLimiter examples
local RateLimiter = require(ReplicatedStorage.Nexus.ratelimiter)
local rateLimiter = RateLimiter.new()

-- Setup limits
rateLimiter:Initialize({
    memoryStore = MemoryStoreService:GetSortedMap("NexusRateLimits")
})

-- Set per-remote limits
rateLimiter:SetLimit("PlayerChat", {
    client = 10,   -- 10 messages per window
    server = 100,  -- 100 messages per window server-side
    window = 1,    -- 1 second window
    adaptive = true
})

rateLimiter:SetLimit("PlayerMove", {
    client = 60,   -- 60 updates per second
    server = 1000, -- 1000 updates per second server-side
    window = 1,
    adaptive = true
})

-- Check limits in handler
nexus:On("PlayerChat", function(player, message)
    local limitKey = "player:" .. player.UserId .. ":PlayerChat"
    
    local canProceed, waitTime = rateLimiter:CheckLimitDetailed("server", limitKey)
    
    if not canProceed then
        -- Rate limit exceeded
        security:RecordSuspiciousActivity(player, "PlayerChat", "Rate limit exceeded")
        
        -- Get violation level
        local violationLevel = rateLimiter:GetViolationLevel(limitKey)
        
        if violationLevel > 3 then
            security:RecordViolation(player, "PlayerChat", "Excessive rate limiting")
        end
        
        return {
            success = false,
            error = "Rate limit exceeded",
            code = "RATE_LIMIT",
            retryAfter = waitTime
        }
    end
    
    -- Process chat message
    return {success = true}
end)

-- Global rate limiting
rateLimiter:SetGlobalLimit("all_events", {
    server = 10000,  -- 10k events per second total
    window = 1
})`
    },
    'promise': {
        lua: `-- Promise examples
local Promise = require(ReplicatedStorage.Nexus.promise)

-- Basic promise
local promise = Promise.new(function(resolve, reject)
    task.wait(1)
    
    local success = math.random() > 0.5
    
    if success then
        resolve("Operation succeeded!")
    else
        reject("Operation failed")
    end
end)

-- Chain promises
promise
    :andThen(function(result)
        print("Success:", result)
        return "Processed: " .. result
    end)
    :andThen(function(processed)
        print("Processed:", processed)
        return Promise.new(function(resolve)
            task.wait(0.5)
            resolve("Final result")
        end)
    end)
    :andThen(function(final)
        print("Final:", final)
    end)
    :catch(function(error)
        warn("Error occurred:", error)
    end)
    :finally(function()
        print("Promise chain completed")
    end)

-- Multiple promises
local promises = {
    Promise.new(function(resolve)
        task.wait(0.1)
        resolve("Promise 1")
    end),
    Promise.new(function(resolve)
        task.wait(0.2)
        resolve("Promise 2")
    end),
    Promise.new(function(resolve)
        task.wait(0.3)
        resolve("Promise 3")
    end)
}

Promise.all(promises)
    :andThen(function(results)
        print("All promises completed:", results)
    end)

Promise.race(promises)
    :andThen(function(first)
        print("First promise completed:", first)
    end)

-- Async/await pattern
local function asyncOperation()
    return Promise.new(function(resolve)
        task.wait(1)
        resolve("Async result")
    end)
end

-- Using :await()
local result = asyncOperation():await()
print("Await result:", result)

-- Error handling with :await()
local success, result = pcall(function()
    return Promise.reject("Intentional error"):await()
end)

if not success then
    warn("Caught error:", result)
end`
    },
    'circuitbreaker': {
        lua: `-- CircuitBreaker examples
local CircuitBreaker = require(ReplicatedStorage.Nexus.circuitbreaker)
local circuitBreaker = CircuitBreaker.new()

-- Configure circuit breakers
circuitBreaker:Configure("DataService", {
    failureThreshold = 5,      -- 5 failures opens circuit
    resetTimeout = 30,         -- 30 seconds to try reset
    halfOpenMaxAttempts = 3,   -- 3 attempts in half-open
    failureWindow = 60         -- Count failures over 60 seconds
})

circuitBreaker:Configure("AuthService", {
    failureThreshold = 3,
    resetTimeout = 60,
    halfOpenMaxAttempts = 1
})

-- Usage pattern
function callWithCircuitBreaker(serviceName, callback)
    if not circuitBreaker:CanExecute(serviceName) then
        return {
            success = false,
            error = "Circuit breaker open",
            code = "CIRCUIT_OPEN",
            service = serviceName
        }
    end
    
    local success, result = pcall(callback)
    
    if success then
        circuitBreaker:RecordSuccess(serviceName)
        return result
    else
        circuitBreaker:RecordFailure(serviceName)
        return {
            success = false,
            error = result,
            code = "SERVICE_ERROR",
            service = serviceName
        }
    end
end

-- Example usage
local result = callWithCircuitBreaker("DataService", function()
    return fetchPlayerData(player.UserId)
end)

if not result.success then
    if result.code == "CIRCUIT_OPEN" then
        warn("DataService unavailable, using cached data")
        return getCachedPlayerData(player.UserId)
    else
        error("DataService error: " .. result.error)
    end
end

-- Monitoring
task.spawn(function()
    while true do
        task.wait(10)
        
        local states = circuitBreaker:GetStates()
        
        for serviceName, state in pairs(states) do
            if state == "open" then
                warn(\`Circuit breaker OPEN for \${serviceName}\`)
            elseif state == "half_open" then
                print(\`Circuit breaker HALF-OPEN for \${serviceName}\`)
            end
        end
    end
end)`
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
            </div>
            <div class="code-block">
                <pre><code id="codeContent">${escapeHtml(examples.lua)}</code></pre>
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
        { id: 'invoke', title: 'Invoke Methods', description: 'Invoke remote functions' },
        { id: 'security', title: 'Security Module', description: 'Advanced security features' },
        { id: 'memorypool', title: 'MemoryPool Module', description: 'Object pooling for performance' }
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
                    '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>' :
                    '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>'
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
    code = code
        .replace(/\b(function|local|return|if|then|else|elseif|end|for|while|do|repeat|until|in|and|or|not|nil|false|true)\b/g, '<span class="token keyword">$&</span>')
        .replace(/\b(require|print|warn|error|pcall|type|typeof|tostring|tonumber|table|string|math|os)\b/g, '<span class="token function">$&</span>')
        .replace(/"([^"]*)"|\'([^\']*)\'/g, '<span class="token string">$&</span>')
        .replace(/\b\d+\b/g, '<span class="token number">$&</span>')
        .replace(/--.*$/gm, '<span class="token comment">$&</span>');
    
    codeElement.innerHTML = code;
}
