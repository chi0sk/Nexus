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

    "RegisterRemote": [
    {
      "title": "RegisterRemote Method",
      "content": `
        <p>The <code>RegisterRemote</code> method creates and configures a new remote (event or function) with enhanced security, rate limiting, and performance options.</p>

        <h3>Syntax</h3>
        <pre><code>Nexus:RegisterRemote(name: string, remoteType: "Event" | "Function", config: RemoteConfig?)</code></pre>

        <h3>Parameters</h3>
        <table class="param-table">
          <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
          <tr><td>name</td><td>string</td><td>Unique identifier for the remote (alphanumeric + underscore only)</td></tr>
          <tr><td>remoteType</td><td>"Event" | "Function"</td><td>Type of remote communication</td></tr>
          <tr><td>config</td><td>RemoteConfig (optional)</td><td>Configuration object for the remote</td></tr>
        </table>

        <h3>RemoteConfig Structure</h3>
        <pre><code>{
  rateLimit: {
    client: number?,    // Calls per window on client side
    server: number?,    // Calls per window on server side
    window: number?,    // Time window in seconds
    adaptive: boolean?  // Use adaptive limiting
  },
  schema: Schema?,      // Validation schema
  middleware: [string]?, // Middleware chain
  security: {
    requireAuth: boolean?,
    requireSignature: boolean?,
    maxSize: number?,
    allowedTypes: [string]?,
    whitelist: [number]?,
    blacklist: [number]?
  },
  performance: {
    batching: boolean?,
    batchSize: number?,
    compression: boolean?,
    priority: number?,
    timeout: number?,
    retryCount: number?
  }
}</code></pre>

        <h3>Example Usage</h3>
        <pre><code>-- Server-side registration
local Nexus = require(game.ReplicatedStorage.NexusRemote)

-- Basic event with rate limiting
Nexus:RegisterRemote("PlayerJumped", "Event", {
  rateLimit = {
    client = 10,      -- 10 calls per second client-side
    server = 100,     // 100 calls per second server-side
    window = 1,       // 1-second window
    adaptive = true   // Adaptive rate limiting
  }
})

-- Function with schema validation
Nexus:RegisterRemote("PurchaseItem", "Function", {
  schema = {
    itemId = "string",
    quantity = "number",
    currency = "string"
  },
  performance = {
    timeout = 5,      // 5-second timeout
    retryCount = 2    // 2 retry attempts
  }
})</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Use descriptive, camelCase names for remotes</li>
          <li>Always set appropriate rate limits based on expected usage</li>
          <li>Use schemas for all remote functions to prevent exploits</li>
          <li>Consider adaptive rate limiting for public-facing remotes</li>
          <li>Set reasonable timeouts for all remote functions</li>
        </ul>
      `
    },
    {
      "title": "Remote Types",
      "content": `
        <h3>RemoteEvent vs RemoteFunction</h3>
        <table class="comparison-table">
          <tr><th>Aspect</th><th>RemoteEvent</th><th>RemoteFunction</th></tr>
          <tr><td>Communication</td><td>One-way (fire and forget)</td><td>Two-way (request-response)</td></tr>
          <tr><td>Return Value</td><td>None</td><td>Returns data to caller</td></tr>
          <tr><td>Use Case</td><td>Notifications, updates</td><td>Data fetching, transactions</td></tr>
          <tr><td>Performance</td><td>Faster (async)</td><td>Slower (sync)</td></tr>
          <tr><td>Guarantee</td><td>Best-effort delivery</td><td>Guaranteed response</td></tr>
        </table>

        <h3>Choosing the Right Type</h3>
        <p><strong>Use RemoteEvent when:</strong></p>
        <ul>
          <li>You don't need a response</li>
          <li>Performance is critical</li>
          <li>You're broadcasting to multiple clients</li>
          <li>The action is idempotent (can be repeated safely)</li>
        </ul>

        <p><strong>Use RemoteFunction when:</strong></p>
        <ul>
          <li>You need data back from the server/client</li>
          <li>You're performing transactions (purchases, saves)</li>
          <li>You need guaranteed execution</li>
          <li>You're fetching dynamic data</li>
        </ul>
      `
    }
  ],

  "Event Handlers": [
    {
      "title": "On Method - Event Handlers",
      "content": `
        <p>The <code>On</code> method registers a handler function for incoming remote events or function invocations with enhanced security and error handling.</p>

        <h3>Syntax</h3>
        <pre><code>Nexus:On(remoteName: string, handler: (player: Player?, ...any) -> any, options: {async: boolean?, timeout: number?}?)</code></pre>

        <h3>Parameters</h3>
        <table class="param-table">
          <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
          <tr><td>remoteName</td><td>string</td><td>Name of the registered remote</td></tr>
          <tr><td>handler</td><td>function</td><td>Function to execute when remote is triggered</td></tr>
          <tr><td>options</td><td>table (optional)</td><td>Handler configuration options</td></tr>
        </table>

        <h3>Handler Function Signature</h3>
        <pre><code>function handler(player: Player?, ...args: any): any
  -- Server-side: player is the Player who triggered the remote
  -- Client-side: player is nil
  -- Return value is only used for RemoteFunctions
end</code></pre>

        <h3>Options</h3>
        <table class="param-table">
          <tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr>
          <tr><td>async</td><td>boolean</td><td>false</td><td>Run handler asynchronously (fire and forget)</td></tr>
          <tr><td>timeout</td><td>number</td><td>10</td><td>Timeout in seconds for function handlers</td></tr>
        </table>

        <h3>Example Usage</h3>
        <pre><code>-- Server-side event handler
Nexus:On("PlayerJumped", function(player, height, velocity)
  -- Log the jump for analytics
  Analytics:RecordJump(player, height, velocity)
  
  -- Update server state
  PlayerStates[player].lastJump = os.clock()
  
  -- Broadcast to other players (async)
  Nexus:FireAllClients("PlayerJumped", player.UserId, height)
end)

-- Server-side function handler (with schema)
Nexus:On("PurchaseItem", function(player, itemId, quantity)
  -- Validate purchase
  local success, item = Inventory:CanPurchase(player, itemId, quantity)
  
  if not success then
    return {success = false, error = "Cannot purchase item"}
  end
  
  -- Process transaction
  Inventory:AddItem(player, itemId, quantity)
  Economy:ChargePlayer(player, item.price * quantity)
  
  return {
    success = true,
    item = item,
    newBalance = Economy:GetBalance(player)
  }
end, {timeout = 5})  -- 5-second timeout

-- Client-side event handler
Nexus:On("PlayerJoined", function(playerName, playerId)
  -- Update UI
  UI.Notifications:Show(playerName .. " joined the game!")
  
  -- Update player list
  PlayerList:AddPlayer(playerId, playerName)
end)

-- Async handler for non-critical operations
Nexus:On("AnalyticsEvent", function(player, category, data)
  -- Send to analytics service (fire and forget)
  AnalyticsService:Track(category, data, player.UserId)
end, {async = true})</code></pre>

        <h3>Error Handling</h3>
        <pre><code>-- All errors in handlers are automatically caught and logged
Nexus:On("CriticalOperation", function(player, data)
  -- If this throws an error, it will be:
  -- 1. Logged to analytics
  -- 2. Returned as {success: false, error: "..."} for functions
  -- 3. Silently ignored for async events
  
  local result = doCriticalOperation(data)
  
  if not result then
    -- Return structured error for functions
    return {
      success = false,
      error = "Operation failed",
      code = "OPERATION_FAILED"
    }
  end
  
  return {success = true, data = result}
end)</code></pre>

        <h3>Best Practices</h3>
        <ul>
          <li>Always validate inputs in handlers (even with schemas)</li>
          <li>Use async handlers for non-critical operations</li>
          <li>Set appropriate timeouts for function handlers</li>
          <li>Return structured responses for functions</li>
          <li>Keep handlers focused on single responsibilities</li>
        </ul>
      `
    },
    {
      "title": "Middleware Integration",
      "content": `
        <p>Handlers can be enhanced with middleware for cross-cutting concerns like authentication, logging, and rate limiting.</p>

        <h3>Middleware Example</h3>
        <pre><code>-- Register authentication middleware
Nexus:UseMiddleware("auth", function(context)
  local player = context.player
  local packet = context.packet
  
  -- Check if player is authenticated
  if not AuthService:IsAuthenticated(player) then
    return false, "Player not authenticated"
  end
  
  -- Check session validity
  if not Security:ValidateSession(packet.metadata.sessionId, player) then
    return false, "Invalid session"
  end
  
  return true
end)

-- Apply middleware to specific remote
Nexus:RegisterRemote("PurchaseItem", "Function", {
  schema = {...},
  middleware = {"auth", "logging"}  -- Chain of middleware
})</code></pre>
      `
    }
  ],

  "Communication": [
    {
      "title": "Communication Architecture",
      "content": `
        <p>Nexus uses a secure, packet-based communication system with multilayered serialization, compression, and encryption.</p>

        <h3>Packet Structure</h3>
        <pre><code>Packet = {
  id: string,           // Unique packet ID (GUID)
  version: number,      // Protocol version (2)
  timestamp: number,    // Creation time (os.clock())
  signature: string,    // Cryptographic signature
  checksum: string,     // Data integrity check
  nonce: string,        // Anti-replay token
  compression: string?, // Compression algorithm used
  encryption: string?,  // Encryption algorithm used
  data: any,           // Serialized payload
  metadata: {
    sender: string?,    // Player ID or "server"
    priority: number?,  // Processing priority (1-10)
    ttl: number?,       // Time-to-live in seconds
    batchId: string?,   // Batch identifier
    sequence: number?,  // Sequence number for ordering
    sessionId: string?, // Player session ID
    remote: string,     // Target remote name
    platform: string    // "roblox"
  }
}</code></pre>

        <h3>Communication Flow</h3>
        <div class="mermaid">
          graph TD
            A[Client/Server] --> B[Create Packet]
            B --> C[Serialize Data]
            C --> D[Compress]
            D --> E[Sign Packet]
            E --> F[Add Metadata]
            F --> G[Send via Roblox Remote]
            G --> H[Receive Packet]
            H --> I[Verify Signature]
            I --> J[Decompress]
            J --> K[Deserialize]
            K --> L[Validate]
            L --> M[Execute Handler]
            M --> N[Return Response]
        </div>

        <h3>Security Layers</h3>
        <ol>
          <li><strong>Packet Signing:</strong> All packets are cryptographically signed</li>
          <li><strong>Checksum Verification:</strong> Data integrity validation</li>
          <li><strong>Nonce Tracking:</strong> Prevents replay attacks</li>
          <li><strong>TTL Enforcement:</strong> Prevents stale packets</li>
          <li><strong>Session Validation:</strong> Ensures valid player sessions</li>
          <li><strong>Rate Limiting:</strong> Prevents abuse and DoS</li>
        </ol>

        <h3>Performance Features</h3>
        <ul>
          <li><strong>Batching:</strong> Multiple events combined into single packets</li>
          <li><strong>Compression:</strong> Automatic compression for large payloads</li>
          <li><strong>Memory Pooling:</strong> Reusable packet objects</li>
          <li><strong>Caching:</strong> Serialization/compression cache</li>
          <li><strong>Priority Queues:</strong> Prioritized packet processing</li>
        </ul>
      `
    },
    {
      "title": "Network Optimization",
      "content": `
        <h3>Batching System</h3>
        <pre><code>-- Enable batching for high-frequency events
Nexus:EnableBatching("PlayerPosition", 0.1, 50)  // Batch every 0.1s, max 50 events

-- Batched packet structure
{
  batch: true,
  events: [
    {player: Player, data: {...}, timestamp: number},
    {player: Player, data: {...}, timestamp: number},
    // ...
  ],
  metadata: {
    batch: true,
    count: number,
    remote: string
  }
}</code></pre>

        <h3>Compression Strategies</h3>
        <table class="comparison-table">
          <tr><th>Algorithm</th><th>Use Case</th><th>Compression</th><th>CPU Cost</th></tr>
          <tr><td>RLE</td><td>Repeated values</td><td>Low-Medium</td><td>Low</td></tr>
          <tr><td>Dictionary</td><td>JSON data</td><td>Medium</td><td>Low</td></tr>
          <tr><td>LZ4</td><td>Large payloads</td><td>High</td><td>Medium</td></tr>
          <tr><td>Base64</td><td>Binary safety</td><td>Expands</td><td>Low</td></tr>
        </table>

        <h3>Memory Management</h3>
        <pre><code>-- Object pooling for frequent allocations
local pool = MemoryPool.new()
pool:Initialize(1000)  // Pool of 1000 objects

-- Acquire and release objects
local packet = pool:Acquire("packet", function()
  return {id = HttpService:GenerateGUID(false)}
end)

-- Use packet
packet.data = serializedData

-- Return to pool
pool:Release("packet", packet)</code></pre>
      `
    }
  ],

  "Fire Events": [
    {
      "title": "Fire Methods - One-way Communication",
      "content": `
        <p>Fire methods provide one-way, asynchronous communication suitable for notifications, updates, and broadcasts.</p>

        <h3>Available Methods</h3>
        <table class="method-table">
          <tr><th>Method</th><th>Direction</th><th>Use Case</th></tr>
          <tr><td><code>Fire</code></td><td>Client → Server</td><td>Client sending data to server</td></tr>
          <tr><td><code>FireClient</code></td><td>Server → Specific Client</td><td>Server targeting single player</td></tr>
          <tr><td><code>FireAllClients</code></td><td>Server → All Clients</td><td>Broadcasts and announcements</td></tr>
          <tr><td><code>FireExcept</code></td><td>Server → All Except One</td><td>Excluding specific players</td></tr>
        </table>

        <h3>Fire (Client to Server)</h3>
        <pre><code>-- Client-side: Fire event to server
local success = Nexus:Fire("PlayerJumped", jumpHeight, velocity)

if not success then
  -- Handle failure (rate limited, circuit breaker, etc.)
  warn("Failed to send jump event")
end</code></pre>

        <h3>FireClient (Server to Specific Client)</h3>
        <pre><code>-- Server-side: Send to specific player
local success = Nexus:FireClient("ShowNotification", player, {
  type = "achievement",
  title = "First Jump!",
  message = "You jumped for the first time!"
})

if not success then
  -- Player may be rate limited or have low trust score
  warn("Failed to send notification to", player.Name)
end</code></pre>

        <h3>FireAllClients (Server Broadcast)</h3>
        <pre><code>-- Server-side: Broadcast to all players
local success = Nexus:FireAllClients("PlayerJoined", {
  userId = newPlayer.UserId,
  username = newPlayer.Name,
  joinTime = os.time()
})

-- For large player counts (>50), automatically batches
-- Skips players with trust score < 0.5</code></pre>

        <h3>FireExcept (Targeted Broadcast)</h3>
        <pre><code>-- Server-side: Broadcast to all except one player
Nexus:FireExcept("PlayerLeft", leavingPlayer, {
  userId = leavingPlayer.UserId,
  reason = "Disconnected"
})

-- Useful for:
-- 1. Hiding a player's own actions from themselves
-- 2. Excluding the perpetrator from notifications
-- 3. Targeted updates</code></pre>

        <h3>Return Values and Error Handling</h3>
        <pre><code>-- All Fire methods return boolean success
local success = Nexus:FireClient("UpdateUI", player, data)

if success then
  print("Event sent successfully")
else
  -- Common failure reasons:
  -- 1. Rate limit exceeded
  -- 2. Circuit breaker open
  -- 3. Player trust score too low
  -- 4. Packet too large
  -- 5. Security validation failed
  warn("Failed to send event. Player may be rate limited.")
end</code></pre>

        <h3>Performance Considerations</h3>
        <ul>
          <li><strong>Batching:</strong> Use <code>FireAllClients</code> for multiple recipients</li>
          <li><strong>Rate Limiting:</strong> Respect client and server rate limits</li>
          <li><strong>Packet Size:</strong> Keep payloads under 100KB</li>
          <li><strong>Frequency:</strong> Avoid high-frequency events (>10/sec)</li>
          <li><strong>Prioritization:</strong> Use metadata.priority for important events</li>
        </ul>

        <h3>Example: Game Event System</h3>
        <pre><code>-- Game event manager using Fire methods
local GameEvents = {}

function GameEvents:PlayerDamaged(attacker, victim, damage, weapon)
  -- Notify victim
  Nexus:FireClient("TakeDamage", victim, {
    damage = damage,
    attacker = attacker.Name,
    weapon = weapon
  })
  
  -- Notify attacker (if different player)
  if attacker ~= victim and attacker:IsA("Player") then
    Nexus:FireClient("DealtDamage", attacker, {
      damage = damage,
      victim = victim.Name,
      weapon = weapon
    })
  end
  
  -- Notify nearby players (excluding involved parties)
  local nearby = GetNearbyPlayers(victim.Position, 50)
  for _, player in ipairs(nearby) do
    if player ~= victim and player ~= attacker then
      Nexus:FireClient("NearbyDamage", player, {
        position = victim.Position,
        damage = damage
      })
    end
  end
end

function GameEvents:GlobalAnnouncement(message, type)
  -- Broadcast to all players
  Nexus:FireAllClients("GlobalAnnouncement", {
    message = message,
    type = type or "info",
    timestamp = os.time()
  })
end

return GameEvents</code></pre>
      `
    }
  ],

  "Invoke Functions": [
    {
      "title": "Invoke Methods - Two-way Communication",
      "content": `
        <p>Invoke methods provide two-way, synchronous communication with guaranteed responses, suitable for transactions, data fetching, and operations requiring confirmation.</p>

        <h3>Available Methods</h3>
        <table class="method-table">
          <tr><th>Method</th><th>Direction</th><th>Return Type</th><th>Use Case</th></tr>
          <tr><td><code>Invoke</code></td><td>Client → Server</td><td>Promise/any</td><td>Client requesting server action</td></tr>
          <tr><td><code>InvokeClient</code></td><td>Server → Client</td><td>Promise/any</td><td>Server requesting client data</td></tr>
          <tr><td><code>InvokeAsync</code></td><td>Any → Any</td><td>Promise</td><td>Promise-based invocation</td></tr>
          <tr><td><code>BatchInvoke</code></td><td>Any → Any</td><td>Promise[]</td><td>Multiple parallel invocations</td></tr>
        </table>

        <h3>Invoke (Client to Server)</h3>
        <pre><code>-- Client-side: Invoke server function
local result = Nexus:Invoke("PurchaseItem", "sword_01", 1)

-- Structured response
if result.success then
  local item = result.data.item
  local newBalance = result.data.newBalance
  UI:ShowPurchaseSuccess(item, newBalance)
else
  UI:ShowError(result.error, result.code)
end

-- Error codes include:
-- "RATE_LIMIT", "TIMEOUT", "SECURITY_ERROR", "VALIDATION_ERROR"
-- "NO_HANDLER", "CIRCUIT_OPEN", "EXECUTION_ERROR"</code></pre>

        <h3>InvokeClient (Server to Client)</h3>
        <pre><code>-- Server-side: Request data from client
local response = Nexus:InvokeClient("GetPlayerSettings", player)

if response.success then
  local settings = response.data
  PlayerSettings[player] = settings
else
  warn("Failed to get settings from", player.Name, ":", response.error)
end</code></pre>

        <h3>InvokeAsync (Promise-based)</h3>
        <pre><code>-- Promise-based invocation with async/await
Nexus:InvokeAsync("LoadPlayerData")
  :andThen(function(data)
    -- Success handler
    PlayerData:Load(data)
    UI:ShowLoadingComplete()
  end)
  :catch(function(err)
    -- Error handler
    UI:ShowError(err.error, err.code)
    Analytics:RecordError("LoadPlayerData", err)
  end)

-- With async/await pattern
local function loadPlayerData()
  local data = Nexus:InvokeAsync("LoadPlayerData"):await()
  PlayerData:Load(data)
  return data
end</code></pre>

        <h3>BatchInvoke (Parallel Execution)</h3>
        <pre><code>-- Execute multiple invocations in parallel
local requests = {
  {"GetInventory"},
  {"GetCurrency"},
  {"GetDailyReward"}
}

local results = Nexus:BatchInvoke("GetPlayerData", requests)

Promise.all(results)
  :andThen(function(allResults)
    local inventory = allResults[1]
    local currency = allResults[2]
    local dailyReward = allResults[3]
    
    UI:UpdateAll(inventory, currency, dailyReward)
  end)</code></pre>

        <h3>Response Structure</h3>
        <pre><code>-- Success response
{
  success: true,
  data: any,           // Handler return value
  timestamp: number,   // Response time
  requestId: string,   // Original packet ID
  signature: string    // Cryptographic signature
}

-- Error response
{
  success: false,
  error: string,       // Error message
  code: string,        // Error code
  timestamp: number,
  requestId: string
}</code></pre>

        <h3>Timeout Handling</h3>
        <pre><code>-- Set per-remote timeout
Nexus:RegisterRemote("ComplexOperation", "Function", {
  performance = {
    timeout = 30  // 30-second timeout
  }
})

-- Individual invocation with timeout
local result = Nexus:Invoke("ComplexOperation", data):timeout(10)  // Override to 10s

-- Timeout error response
{
  success: false,
  error: "Request timeout",
  code: "TIMEOUT",
  timestamp: number
}</code></pre>

        <h3>Circuit Breaker Pattern</h3>
        <pre><code>-- Automatic circuit breaker integration
-- After 5 failures, circuit opens for 30 seconds
-- After 2 successes in half-open state, circuit closes

-- Circuit states:
-- 1. Closed: Normal operation
-- 2. Open: Fail-fast, no requests allowed
-- 3. Half-open: Testing recovery

-- Manual state check
if Nexus.circuitBreaker:CanExecute("PurchaseItem") then
  -- Safe to invoke
  Nexus:Invoke("PurchaseItem", itemId)
else
  -- Circuit open, show maintenance message
  UI:ShowMaintenance()
end</code></pre>

        <h3>Example: Transaction System</h3>
        <pre><code>-- Complete purchase flow with error handling
local PurchaseSystem = {}

function PurchaseSystem:BuyItem(player, itemId)
  -- Step 1: Validate player can purchase
  local validation = Nexus:InvokeClient("ValidatePurchase", player, itemId)
  if not validation.success then return validation end
  
  -- Step 2: Process payment (with retry)
  local paymentResult = self:ProcessPaymentWithRetry(player, itemId)
  if not paymentResult.success then return paymentResult end
  
  -- Step 3: Deliver item
  local deliveryResult = Inventory:AddItem(player, itemId, 1)
  if not deliveryResult.success then
    -- Refund on delivery failure
    self:RefundPayment(player, itemId)
    return deliveryResult
  end
  
  -- Step 4: Send confirmation to client
  Nexus:FireClient("PurchaseComplete", player, {
    itemId = itemId,
    transactionId = paymentResult.transactionId
  })
  
  return {
    success = true,
    transactionId = paymentResult.transactionId,
    item = itemId
  }
end

function PurchaseSystem:ProcessPaymentWithRetry(player, itemId)
  local maxRetries = 3
  local lastError
  
  for attempt = 1, maxRetries do
    local result = Nexus:Invoke("ProcessPayment", player.UserId, itemId)
    
    if result.success then
      return result
    end
    
    lastError = result
    
    -- Don't retry on certain errors
    if result.code == "INSUFFICIENT_FUNDS" then
      break
    end
    
    -- Wait before retry
    if attempt < maxRetries then
      task.wait(1 * attempt)  // Exponential backoff
    end
  end
  
  return lastError
end

return PurchaseSystem</code></pre>
      `
    }
  ],

  "Modules": [
    {
      "title": "Module System Overview",
      "content": `
        <p>Nexus is built on a modular architecture where each component can be used independently or integrated into the main system.</p>

        <h3>Core Modules</h3>
        <table class="module-table">
          <tr><th>Module</th><th>Purpose</th><th>Key Features</th></tr>
          <tr><td>Validator</td><td>Data validation</td><td>Schema validation, type checking, exploit prevention</td></tr>
          <tr><td>Serializer</td><td>Data serialization</td><td>Compression, encryption, Roblox type support</td></tr>
          <tr><td>Security</td><td>Security enforcement</td><td>Packet signing, threat detection, trust system</td></tr>
          <tr><td>RateLimiter</td><td>Rate limiting</td><td>Adaptive limits, violation tracking, distributed support</td></tr>
          <tr><td>Promise</td><td>Async programming</td><td>Promise/A+ implementation, async/await</td></tr>
          <tr><td>CircuitBreaker</td><td>Fault tolerance</td><td>Circuit breaker pattern, automatic recovery</td></tr>
          <tr><td>MemoryPool</td><td>Performance</td><td>Object pooling, memory optimization</td></tr>
          <tr><td>Analytics</td><td>Monitoring</td><td>Event tracking, performance metrics, error logging</td></tr>
          <tr><td>Profiler</td><td>Performance analysis</td><td>Execution timing, bottleneck detection</td></tr>
        </table>

        <h3>Module Integration</h3>
        <pre><code>-- Using modules independently
local Validator = require(script.Validator).new()
local Serializer = require(script.Serializer).new()
local Security = require(script.Security).new()

-- Configure independently
Validator:RegisterType("PlayerId", function(v)
  return type(v) == "number" and v > 0 and v < 1000000000
end)

-- Use in custom systems
local function validatePlayerData(data)
  return Validator:Validate(data, {
    userId = "PlayerId",
    username = {type = "string", minLength = 3, maxLength = 20},
    position = "Vector3"
  })
end

-- Integrated use with Nexus
local Nexus = require(script.NexusRemote).new()
-- All modules are automatically initialized and integrated</code></pre>

        <h3>Custom Module Creation</h3>
        <pre><code>-- Creating a custom module that integrates with Nexus
local CustomModule = {}
CustomModule.__index = CustomModule

function CustomModule.new()
  local self = setmetatable({}, CustomModule)
  self.data = {}
  return self
end

function CustomModule:Initialize(nexusInstance)
  -- Get access to Nexus components
  self.nexus = nexusInstance
  self.validator = nexusInstance.validator
  self.security = nexusInstance.security
  
  -- Register with Nexus events
  self.connection = nexusInstance.SomeEvent:Connect(function(...)
    self:HandleEvent(...)
  end)
  
  return self
end

function CustomModule:DoSomething(data)
  -- Use Nexus validator
  local valid, err = self.validator:Validate(data, someSchema)
  if not valid then return false, err end
  
  -- Use Nexus security
  local packet = {data = data}
  local signed = self.security:SignPacket(packet, "custom_module")
  
  -- Process data
  return self:Process(signed)
end

-- Register as Nexus plugin
Nexus:RegisterModule("CustomModule", CustomModule.new())</code></pre>

        <h3>Module Lifecycle</h3>
        <ol>
          <li><strong>Initialization:</strong> Modules are created and configured</li>
          <li><strong>Integration:</strong> Modules are connected to Nexus core</li>
          <li><strong>Operation:</strong> Modules process data and events</li>
          <li><strong>Cleanup:</strong> Modules release resources on shutdown</li>
        </ol>
      `
    }
  ],

  "Validator": [
    {
      "title": "Validator Module",
      "content": `
        <p>The Validator module provides comprehensive data validation with full Roblox type support, schema validation, and exploit prevention.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Complete Roblox type validation (Vector3, CFrame, Color3, etc.)</li>
          <li>Schema-based validation with nested structures</li>
          <li>Custom type registration</li>
          <li>Exploit pattern detection</li>
          <li>Performance-optimized validation cache</li>
        </ul>

        <h3>Basic Usage</h3>
        <pre><code>local Validator = require(script.Validator).new()

-- Simple type validation
local valid, err = Validator:Validate("hello", "string")
-- true

valid, err = Validator:Validate(123, "string")
-- false, "Expected string"

-- With options
valid, err = Validator:Validate("short", {
  type = "string",
  options = {minLength = 5}
})
-- false, "String too short (min 5)"</code></pre>

        <h3>Supported Types</h3>
        <div class="type-grid">
          <div class="type-category">
            <h4>Primitive Types</h4>
            <ul>
              <li><code>string</code></li>
              <li><code>number</code></li>
              <li><code>boolean</code></li>
              <li><code>table</code></li>
              <li><code>nil</code></li>
            </ul>
          </div>
          <div class="type-category">
            <h4>Roblox Math Types</h4>
            <ul>
              <li><code>Vector2</code>, <code>Vector3</code></li>
              <li><code>Vector2int16</code>, <code>Vector3int16</code></li>
              <li><code>CFrame</code></li>
              <li><code>Color3</code>, <code>BrickColor</code></li>
              <li><code>UDim</code>, <code>UDim2</code></li>
              <li><code>Ray</code>, <code>Region3</code></li>
            </ul>
          </div>
          <div class="type-category">
            <h4>Roblox Instance Types</h4>
            <ul>
              <li><code>Instance</code> (with className filter)</li>
              <li><code>Player</code>, <code>Model</code></li>
              <li><code>BasePart</code>, <code>Humanoid</code></li>
              <li><code>Tool</code>, <code>Camera</code></li>
              <li><code>RemoteEvent</code>, <code>RemoteFunction</code></li>
            </ul>
          </div>
          <div class="type-category">
            <h4>Special Types</h4>
            <ul>
              <li><code>EnumItem</code> (with enumType filter)</li>
              <li><code>Axes</code>, <code>Faces</code></li>
              <li><code>ColorSequence</code>, <code>NumberSequence</code></li>
              <li><code>NumberRange</code>, <code>Rect</code></li>
            </ul>
          </div>
        </div>

        <h3>Schema Validation</h3>
        <pre><code>-- Define a schema
local playerSchema = {
  userId = "number",
  username = {
    type = "string",
    options = {minLength = 3, maxLength = 20}
  },
  position = "Vector3",
  inventory = {
    type = "table",
    options = {
      schema = {
        {itemId = "string", quantity = "number"}
      }
    }
  },
  tags = {"string"},  -- Array of strings
  metadata = {        -- Dictionary
    joinTime = "number",
    lastActive = "number"
  }
}

-- Validate data
local playerData = {
  userId = 12345,
  username = "PlayerOne",
  position = Vector3.new(0, 10, 0),
  inventory = {
    {itemId = "sword", quantity = 1},
    {itemId = "potion", quantity = 3}
  },
  tags = {"vip", "beta"},
  metadata = {
    joinTime = os.time(),
    lastActive = os.time()
  }
}

local valid, err = Validator:Validate(playerData, playerSchema)</code></pre>

        <h3>Custom Type Registration</h3>
        <pre><code>-- Register custom validator
Validator:RegisterType("PlayerId", function(value, options)
  if type(value) ~= "number" then
    return false, "Expected number for PlayerId"
  end
  
  -- Valid Roblox UserId range
  if value < 1 or value > 1000000000 then
    return false, "PlayerId out of valid range"
  end
  
  return true
end, {robust = true, allowNil = false})

-- Register with options support
Validator:RegisterType("SafeString", function(value, options)
  options = options or {}
  local maxLength = options.maxLength or 1000
  
  if type(value) ~= "string" then
    return false, "Expected string"
  end
  
  if #value > maxLength then
    return false, string.format("String too long (max %d)", maxLength)
  end
  
  -- Prevent injection attacks
  if value:match("[<>\"'%c]") then
    return false, "String contains unsafe characters"
  end
  
  return true
end)

-- Use custom type
local valid, err = Validator:Validate("safe data", {
  type = "SafeString",
  options = {maxLength = 100}
})</code></pre>

        <h3>Advanced Validation Patterns</h3>
        <pre><code>-- Union types (multiple possible types)
local weaponSchema = Validator.typeValidators.Union({
  Validator.typeValidators.string,
  Validator.typeValidators.table
})

-- Optional fields
local optionalSchema = {
  username = "string",
  displayName = Validator.typeValidators.Optional("string")
}

-- Array validation
local arraySchema = Validator.typeValidators.Array(
  function(element)
    return type(element) == "string" and #element > 0
  end
)

-- Dictionary validation
local dictSchema = Validator.typeValidators.Dictionary(
  function(key) return type(key) == "string" end,  // Key validator
  function(value) return type(value) == "number" end // Value validator
)</code></pre>

        <h3>Exploit Prevention</h3>
        <pre><code>-- Built-in security validators
local safeValidators = {
  SafeString = Validator.typeValidators.SafeString,
  SafeNumber = Validator.typeValidators.SafeNumber,
  Position = Validator.typeValidators.Position,
  Rotation = Validator.typeValidators.Rotation,
  UserId = Validator.typeValidators.UserId,
  Timestamp = Validator.typeValidators.Timestamp
}

-- Example: Validating user input
local function validateUserInput(input)
  return Validator:Validate(input, {
    username = "SafeString",
    age = {
      type = "SafeNumber",
      options = {min = 13, max = 100}
    },
    position = "Position",
    timestamp = "Timestamp"
  })
end

-- Detecting exploit patterns
local function detectExploits(data)
  local exploitPatterns = {
    injection = {"<script>", "</script>", "javascript:", "onload="},
    rce = {"loadstring", "require%(", "dofile", "debug%."},
    memory = {"newproxy", "getrawmetatable", "setrawmetatable"}
  }
  
  local json = HttpService:JSONEncode(data)
  for category, patterns in pairs(exploitPatterns) do
    for _, pattern in ipairs(patterns) do
      if json:find(pattern) then
        return false, string.format("Exploit pattern detected: %s", pattern)
      end
    end
  end
  
  return true
end</code></pre>

        <h3>Performance Optimization</h3>
        <pre><code>-- Schema caching for repeated validation
Validator:RegisterSchema("PlayerSchema", playerSchema)

-- Reuse cached schema
local valid, err = Validator:Validate(data, "PlayerSchema")

-- Batch validation
local function validateBatch(items, schema)
  local results = {}
  for i, item in ipairs(items) do
    local valid, err = Validator:Validate(item, schema)
    results[i] = {valid = valid, error = err}
  end
  return results
end

-- Early exit on failure
local function validateAllRequired(data, schema)
  for field, fieldSchema in pairs(schema) do
    if not data[field] then
      return false, string.format("Missing required field: %s", field)
    end
    
    local valid, err = Validator:Validate(data[field], fieldSchema)
    if not valid then
      return false, string.format("Field %s: %s", field, err)
    end
  end
  return true
end</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic schema validation for remotes
Nexus:RegisterRemote("UpdatePlayer", "Function", {
  schema = {
    position = "Vector3",
    velocity = "Vector3",
    timestamp = "Timestamp"
  }
})

-- Manual validation in handlers
Nexus:On("CustomEvent", function(player, data)
  -- Validate even if no schema defined
  local valid, err = Nexus.validator:Validate(data, customSchema)
  if not valid then
    return {success = false, error = err}
  end
  
  -- Process valid data
  return processData(data)
end)

-- Validator statistics
local stats = Validator:GetStats()
print("Validations performed:", stats.validationCount)
print("Cache hit rate:", stats.cacheHitRate)</code></pre>
      `
    }
  ],

  "Serializer": [
    {
      "title": "Serializer Module",
      "content": `
        <p>The Serializer module provides advanced serialization with compression, encryption, and full Roblox type support for efficient network transmission.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Multi-strategy serialization (JSON, Binary, Custom)</li>
          <li>Built-in compression algorithms (RLE, Dictionary, LZ4)</li>
          <li>Roblox type serialization (Vector3, CFrame, Color3, etc.)</li>
          <li>Performance caching and memory pooling</li>
          <li>Encryption and obfuscation support</li>
        </ul>

        <h3>Basic Usage</h3>
        <pre><code>local Serializer = require(script.Serializer).new()

-- Simple serialization
local data = {name = "Player", score = 100, position = Vector3.new(0, 5, 0)}
local serialized = Serializer:Serialize(data)
-- Returns: Serialized string or table

-- Deserialization
local deserialized = Serializer:Deserialize(serialized)
-- Returns: Original data structure

-- With compression
local compressed = Serializer:Serialize(data, {
  strategy = "json",
  compress = true,
  cache = true
})</code></pre>

        <h3>Serialization Strategies</h3>
        <table class="strategy-table">
          <tr><th>Strategy</th><th>Format</th><th>Best For</th><th>Limitations</th></tr>
          <tr><td>json</td><td>JSON string</td><td>Compatibility, readability</td><td>No functions/threads</td></tr>
          <tr><td>binary</td><td>Custom binary</td><td>Roblox types, performance</td><td>Complex structures</td></tr>
          <tr><td>string</td><td>String representation</td><td>Simple data, debugging</td><td>Loss of type information</td></tr>
        </table>

        <h3>Compression Algorithms</h3>
        <pre><code>-- Available compression methods
local algorithms = {
  "rle",        // Run-Length Encoding (repeated values)
  "dictionary", // Pattern dictionary (JSON data)
  "lz4",        // LZ4 compression (large data)
  "base64",     // Base64 encoding (binary safety)
  "obfuscate"   // Light obfuscation (not encryption)
}

-- Auto-select best compression
local compressed, algorithm = Serializer:Compress(data, "auto")

-- Manual selection
local rleCompressed = Serializer:Compress(data, "rle")
local dictCompressed = Serializer:Compress(data, "dictionary")

-- Decompression
local original = Serializer:Decompress(compressed, algorithm)</code></pre>

        <h3>Roblox Type Support</h3>
        <pre><code>-- Full Roblox type serialization
local complexData = {
  position = Vector3.new(10, 20, 30),
  rotation = CFrame.new(0, 0, 0),
  color = Color3.new(1, 0.5, 0),
  udim = UDim2.new(0.5, 0, 0.5, 0),
  range = NumberRange.new(0, 100),
  players = {player1, player2}  // Instance references
}

local serialized = Serializer:Serialize(complexData, {
  strategy = "binary"  // Required for Roblox types
})

-- Custom type registration
Serializer:RegisterType("Weapon", 
  function(weaponInstance)
    -- Serialize to lightweight representation
    return {
      id = weaponInstance:GetAttribute("WeaponId"),
      damage = weaponInstance:GetAttribute("Damage"),
      owner = weaponInstance:GetAttribute("Owner")
    }
  end,
  function(data)
    -- Deserialize back to game object
    return Weapons:GetWeapon(data.id)
  end
)</code></pre>

        <h3>Performance Features</h3>
        <pre><code>-- Size estimation
local size = Serializer:EstimateSize(data)
print("Estimated size:", size, "bytes")

-- Compression threshold (auto-compress if > threshold)
local optimized = Serializer:Serialize(data, {
  compress = true,
  threshold = 512  // Auto-compress if > 512 bytes
})

-- Caching for repeated serialization
local cached = Serializer:Serialize(data, {cache = true})
// Subsequent calls with same data return cached result

-- Memory pooling integration
local pool = MemoryPool.new()
pool:Initialize(1000)

local function serializeWithPool(data)
  local serialized = pool:Acquire("serialized", function()
    return Serializer:Serialize(data)
  end)
  
  -- Use serialized data
  
  pool:Release("serialized", serialized)
end</code></pre>

        <h3>Security Features</h3>
        <pre><code>-- Data obfuscation (light security)
local obfuscated = Serializer:Serialize(data, {
  strategy = "json",
  compress = "obfuscate"
})

-- Checksum verification
local function createChecksum(data)
  local serialized = Serializer:Serialize(data)
  local checksum = 0
  for i = 1, #serialized do
    checksum = (checksum + string.byte(serialized, i)) % 256
  end
  return checksum
end

-- Tamper detection
local function verifyData(data, originalChecksum)
  local currentChecksum = createChecksum(data)
  return currentChecksum == originalChecksum
end</code></pre>

        <h3>Advanced Usage</h3>
        <pre><code>-- Custom serialization strategy
Serializer.strategies.custom = {
  serialize = function(data)
    -- Custom serialization logic
    local result = {}
    for k, v in pairs(data) do
      if type(v) == "Vector3" then
        result[k] = {type = "Vector3", x = v.X, y = v.Y, z = v.Z}
      else
        result[k] = v
      end
    end
    return HttpService:JSONEncode(result)
  end,
  deserialize = function(data)
    local decoded = HttpService:JSONDecode(data)
    local result = {}
    for k, v in pairs(decoded) do
      if type(v) == "table" and v.type == "Vector3" then
        result[k] = Vector3.new(v.x, v.y, v.z)
      else
        result[k] = v
      end
    end
    return result
  end
}

-- Streaming serialization for large data
local function serializeInChunks(data, chunkSize)
  local chunks = {}
  local serialized = Serializer:Serialize(data)
  
  for i = 1, #serialized, chunkSize do
    local chunk = serialized:sub(i, i + chunkSize - 1)
    table.insert(chunks, chunk)
  end
  
  return chunks
end

-- Delta serialization (only changes)
local lastState = {}
local function serializeDelta(newState)
  local delta = {}
  for k, v in pairs(newState) do
    if not deepCompare(v, lastState[k]) then
      delta[k] = v
    end
  end
  
  lastState = deepCopy(newState)
  return Serializer:Serialize(delta)
end</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic serialization in Nexus packets
local packet = {
  id = "packet_123",
  data = Nexus.serializer:Serialize(payload, {
    compress = true,
    strategy = "binary"
  }),
  compression = "lz4"
}

-- Custom serialization for specific remotes
Nexus:RegisterRemote("StreamData", "Event", {
  performance = {
    compression = true,
    compressionThreshold = 1024  // Compress if > 1KB
  }
})

-- Monitoring and statistics
local stats = Nexus.serializer:GetStats()
print("Compression ratio:", stats.compressionRatio)
print("Cache hits:", stats.cacheHits)
print("Total bytes saved:", stats.totalBytesIn - stats.totalBytesOut)</code></pre>
      `
    }
  ],

  "Security": [
    {
      "title": "Security Module",
      "content": `
        <p>The Security module provides enterprise-grade security features including packet signing, threat detection, trust systems, and exploit prevention.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Cryptographic packet signing and verification</li>
          <li>Master key management with automatic rotation</li>
          <li>Player trust scoring and session management</li>
          <li>Exploit pattern detection and prevention</li>
          <li>Violation tracking and automatic banning</li>
          <li>Replay attack prevention with nonce tracking</li>
        </ul>

        <h3>Initialization</h3>
        <pre><code>local Security = require(script.Security).new()

-- Initialize with configuration
Security:Initialize({
  threatDetection = true,
  autoBanThreshold = 10,
  packetTTL = 10,
  sessionTimeout = 300,
  debug = false
})

-- Server-only master key initialization
if RunService:IsServer() then
  Security:_InitializeMasterKey()
  // Generates cryptographically strong key using:
  // - Random GUID
  // - Server startup time
  // - Game JobId
  // - PlaceId
  // - Additional entropy
end</code></pre>

        <h3>Packet Security</h3>
        <pre><code>-- Signing packets
local packet = {
  id = "packet_123",
  timestamp = os.clock(),
  data = {action = "jump", height = 10}
}

local signature = Security:SignPacket(packet, player)
// packet.signature = "hash:timestamp:keyVersion"

-- Verifying packets
local isValid = Security:VerifyPacket(packet, player)
if not isValid then
  -- Security violation detected
  Security:RecordViolation(player, "Invalid packet signature")
  return false
end

-- Checksum calculation
local checksum = Security:CalculateChecksum(packet)
packet.checksum = checksum</code></pre>

        <h3>Player Management</h3>
        <pre><code>-- Initialize player security context
Security:InitializePlayer(player)
// Creates:
// - Trust score based on account age
// - Session token
// - Violation tracking

-- Session management
local sessionId = Security:CreateSession(player)
// Generates unique session with expiration

local isValid = Security:ValidateSession(sessionId, player)
// Validates session and updates last activity

-- Trust scoring
local trustScore = Security:GetTrustScore(player)
// Based on: account age, violations, behavior

Security:SetTrustScore(player, 0.8)  // Manual adjustment
Security:_UpdateTrustScore(player, -0.1)  // Penalty
Security:_UpdateTrustScore(player, 0.05)  // Reward</code></pre>

        <h3>Threat Detection</h3>
        <pre><code>-- Exploit pattern detection
local exploitPatterns = {
  injection = {"<script>", "</script>", "javascript:", "onload="},
  rce = {"loadstring", "require%(", "dofile", "debug%."},
  memory = {"newproxy", "getrawmetatable", "setrawmetatable"},
  network = {"FireServer", "InvokeServer", "GetChildren"},
  recursive = {"__index", "__newindex", "__call"}
}

-- Automatic detection
local hasExploit, pattern = Security:_DetectExploitPatterns(packet)
if hasExploit then
  Security:RecordViolation(player, remoteName, 
    "Exploit pattern: " .. pattern)
  return false
end

-- Suspicious activity tracking
Security:RecordSuspiciousActivity(player, remoteName, reason)
// Records for analysis, small trust penalty</code></pre>

        <h3>Violation System</h3>
        <pre><code>-- Recording violations
Security:RecordViolation(player, remoteName, "Rate limit exceeded")
// Effects:
// - Increments violation count
// - Reduces trust score
// - Logs to analytics
// - Triggers auto-ban at threshold

-- Auto-ban system
// After autoBanThreshold violations (default 10):
// 1. Player added to blacklist
// 2. Kicked with security message
// 3. Event logged for review

-- Manual moderation
Security:FlagPlayer(player, "Suspicious behavior")
Security:WhitelistPlayer(player)  // Manual override
Security:BlacklistPlayer(player, duration, reason)</code></pre>

        <h3>Advanced Security Features</h3>
        <pre><code>-- Key rotation (server-only)
if Security.config.enableKeyRotation then
  // Automatic rotation every KEY_ROTATION_INTERVAL (1 hour)
  // Previous keys retained for 5 minutes during transition
end

-- Nonce tracking (replay attack prevention)
local nonce = HttpService:GenerateGUID(false)
packet.nonce = nonce

local isReplay = Security:_IsReplayAttack(nonce, player)
if isReplay then
  Security:RecordViolation(player, nil, "Replay attack")
  return false
end

-- Packet validation
local isValid = Security:ValidatePacket(packet, player, remoteName)
// Checks:
// 1. Structure validation
// 2. TTL expiration
// 3. Size limits
// 4. Nonce validity
// 5. Session validation
// 6. Data structure depth
// 7. Exploit patterns</code></pre>

        <h3>Monitoring and Reporting</h3>
        <pre><code>-- Security report
local report = Security:GenerateReport({
  detailed = true,
  player = player  // Optional player-specific report
})

// Returns:
// - Summary statistics
// - Player trust scores
// - Violation counts
// - Session information
// - Threat patterns

-- Real-time monitoring
// All security events are logged to Analytics module
// Can be integrated with external monitoring systems

-- Debug information
if Security.config.debug then
  print("[Security] Packet signed by:", packet.metadata.sender)
  print("[Security] Trust score:", Security:GetTrustScore(player))
  print("[Security] Violations:", #Security.violations)
end</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic security in Nexus
local Nexus = require(script.NexusRemote).new()

-- Security is automatically initialized and integrated
// All packets are validated and signed
// Player sessions are managed automatically
// Violations are tracked and enforced

-- Custom security policies
Nexus:RegisterRemote("AdminCommand", "Function", {
  security = {
    requireAuth = true,
    whitelist = {123456, 789012},  // Admin UserIds
    requireSignature = true,
    maxSize = 1024
  }
})

-- Security middleware
Nexus:UseMiddleware("security", function(context)
  local player = context.player
  local packet = context.packet
  
  -- Custom security checks
  if not Security:IsPlayerWhitelisted(player) then
    return false, "Player not authorized"
  end
  
  if Security:GetTrustScore(player) < 0.7 then
    return false, "Insufficient trust score"
  end
  
  return true
end)</code></pre>
      `
    }
  ],

  "RateLimiter": [
    {
      "title": "RateLimiter Module",
      "content": `
        <p>The RateLimiter module provides sophisticated rate limiting with adaptive limits, violation tracking, and distributed support for high-scale environments.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Dual-layer rate limiting (client + server)</li>
          <li>Adaptive limits based on behavior</li>
          <li>Violation tracking and trust scoring</li>
          <li>Distributed rate limiting with MemoryStore</li>
          <li>Burst allowance and grace periods</li>
          <li>Detailed statistics and monitoring</li>
        </ul>

        <h3>Initialization</h3>
        <pre><code>local RateLimiter = require(script.RateLimiter).new()

-- Initialize with options
RateLimiter:Initialize({
  memoryStore = MemoryStoreService:GetSortedMap("RateLimits"),
  adaptive = true
})

-- Configure adaptive behavior
RateLimiter.adaptiveConfig = {
  baseMultiplier = 1.0,
  minMultiplier = 0.1,      // 10% of normal rate
  maxMultiplier = 5.0,      // 500% of normal rate
  decayRate = 0.99,         // Trust decay per minute
  recoveryRate = 1.01,      // Trust recovery per minute
  violationPenalty = 0.8,   // 20% reduction per violation
  successBonus = 1.01,      // 1% increase per success
  minRequestsForAdaptive = 10,
  updateInterval = 60       // Update every minute
}</code></pre>

        <h3>Setting Limits</h3>
        <pre><code>-- Configure rate limits for a remote
RateLimiter:SetLimit("PlayerJumped", {
  client = 10,     // 10 calls per window client-side
  server = 100,    // 100 calls per window server-side
  window = 1,      // 1-second window
  adaptive = true, // Use adaptive limiting
  burst = 15       // Allow 15 calls as burst (150% of limit)
})

-- Multiple limit types
// 1. Client-side: Global client limits
// 2. Server-side: Per-player limits
// 3. Global: Across all players (server-wide)</code></pre>

        <h3>Checking Limits</h3>
        <pre><code>-- Simple check (returns boolean)
local canProceed = RateLimiter:CheckLimit("client", "PlayerJumped")
if not canProceed then
  return false, "Rate limit exceeded"
end

-- Detailed check (returns boolean + wait time)
local canProceed, waitTime = RateLimiter:CheckLimitDetailed(
  "server", 
  "player:12345:PlayerJumped"
)

if not canProceed then
  return false, string.format("Wait %.2f seconds", waitTime)
end

-- Player-specific checking
local canProceed = RateLimiter:CheckPlayerLimit(player, "PlayerJumped")
local canProceed, waitTime = RateLimiter:CheckPlayerLimitDetailed(
  player, 
  "PlayerJumped"
)</code></pre>

        <h3>Adaptive Rate Limiting</h3>
        <pre><code>-- Adaptive multiplier based on behavior
// Good behavior increases limits (up to maxMultiplier)
// Violations decrease limits (down to minMultiplier)
// Automatic recovery over time

-- Example adaptive progression:
// 1. New player: multiplier = 1.0 (100%)
// 2. Good behavior (10 successes): multiplier = 1.1 (110%)
// 3. Excellent behavior (100 successes): multiplier = 1.5 (150%)
// 4. Violation: multiplier = 0.8 (80%)
// 5. Multiple violations: multiplier = 0.1 (10%)

-- Time-based adjustments
// Multipliers decay toward 1.0 over time
// Violation penalties recover over time
// Configurable decay/recovery rates</code></pre>

        <h3>Violation Tracking</h3>
        <pre><code>-- Get violation level (0-5 scale)
local level = RateLimiter:GetViolationLevel("PlayerJumped")
// 0: No violations
// 1: 1 violation in last minute
// 2: 2-4 violations
// 3: 5-9 violations
// 4: 10-19 violations
// 5: 20+ violations

-- Player statistics
local stats = RateLimiter:GetPlayerStats(player)
// Returns: totalCalls, violations, trustScore, limitedRemotes

-- Global statistics
local globalStats = RateLimiter:GetGlobalStats()
// Returns: totalRemotes, totalPlayers, activePlayers, 
// totalCalls, totalViolations, avgTrustScore</code></pre>

        <h3>Distributed Rate Limiting</h3>
        <pre><code>-- Using MemoryStore for multi-server environments
if MemoryStoreService then
  RateLimiter:Initialize({
    memoryStore = MemoryStoreService:GetSortedMap("NexusRateLimits")
  })
end

-- Distributed tracking ensures:
// 1. Consistent limits across servers
// 2. Shared violation tracking
// 3. Coordinated adaptive behavior
// 4. Centralized statistics</code></pre>

        <h3>Management and Monitoring</h3>
        <pre><code>-- Reset player limits
RateLimiter:ResetPlayer(player)  // All remotes
RateLimiter:ResetPlayer(player, "PlayerJumped")  // Specific remote

-- Cleanup player data
RateLimiter:CleanupPlayer(player)
// Removes all tracking data when player leaves

-- Reset everything
RateLimiter:ResetAll()
// Clears all limits, violations, and player data

-- Get detailed statistics
local stats = RateLimiter:GetStats("PlayerJumped")
// Returns: client limits, server limits, global limits, violations

local allStats = RateLimiter:GetStats()
// Returns: all limits, violations, player count, adaptive mode</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic rate limiting in Nexus
local Nexus = require(script.NexusRemote).new()

// All remotes automatically get rate limiting
// Violations are tracked and affect trust scores
// Adaptive limits adjust based on player behavior

-- Custom rate limit configuration
Nexus:RegisterRemote("ChatMessage", "Event", {
  rateLimit = {
    client = 5,      // 5 messages per second client-side
    server = 20,     // 20 messages per second server-side
    window = 1,
    adaptive = true
  }
})

-- Manual rate limit checks
if not Nexus.rateLimiter:CheckPlayerLimit(player, "ChatMessage") then
  Nexus.security:RecordViolation(player, "ChatMessage", "Rate limit")
  return false
end

-- Monitoring rate limit violations
local violationLevel = Nexus.rateLimiter:GetViolationLevel(
  "player:" .. player.UserId .. ":ChatMessage"
)

if violationLevel >= 3 then
  -- High violation level, take action
  Nexus.security:FlagPlayer(player, "Chat spam")
end</code></pre>
      `
    }
  ],

  "Promise": [
    {
      "title": "Promise Module",
      "content": `
        <p>The Promise module provides a robust Promise/A+ implementation with async/await support for asynchronous programming in Roblox.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Full Promise/A+ specification compliance</li>
          <li>Async/await pattern support</li>
          <li>Timeout handling and cancellation</li>
          <li>Promise chaining and composition</li>
          <li>Static methods (all, race, resolve, reject)</li>
          <li>Error propagation and recovery</li>
        </ul>

        <h3>Basic Usage</h3>
        <pre><code>local Promise = require(script.Promise)

-- Creating a promise
local promise = Promise.new(function(resolve, reject)
  task.wait(2)  // Simulate async operation
  local success, result = pcall(someAsyncFunction)
  
  if success then
    resolve(result)
  else
    reject(result)
  end
end)

-- Promise chaining
promise
  :andThen(function(value)
    print("Success:", value)
    return processValue(value)
  end)
  :catch(function(error)
    warn("Error:", error)
    return fallbackValue
  end)
  :andThen(function(finalValue)
    print("Final result:", finalValue)
  end)</code></pre>

        <h3>Async/Await Pattern</h3>
        <pre><code>-- Using await for synchronous-style async code
local function fetchPlayerData(playerId)
  local promise = Promise.new(function(resolve, reject)
    local data = DataStore:GetAsync("player_" .. playerId)
    if data then
      resolve(data)
    else
      reject("Player data not found")
    end
  end)
  
  return promise
end

-- In an async context
local function loadPlayer(playerId)
  local data = fetchPlayerData(playerId):await()
  Player:LoadData(data)
  return data
end

-- Error handling with await
local function safeLoad(playerId)
  local success, data = pcall(function()
    return fetchPlayerData(playerId):await()
  end)
  
  if not success then
    warn("Failed to load player:", data)
    return defaultPlayerData
  end
  
  return data
end</code></pre>

        <h3>Promise Composition</h3>
        <pre><code>-- Promise.all (wait for all)
local promises = {
  fetchPlayerData(1),
  fetchPlayerData(2),
  fetchPlayerData(3)
}

Promise.all(promises)
  :andThen(function(allData)
    print("All players loaded:", #allData)
  end)
  :catch(function(error)
    warn("One or more players failed to load:", error)
  end)

-- Promise.race (first to complete)
Promise.race({fastOperation(), slowOperation()})
  :andThen(function(firstResult)
    print("First completed:", firstResult)
  end)

-- Promise.resolve/reject
Promise.resolve("Immediate value")
  :andThen(print)  // Prints: Immediate value

Promise.reject("Error message")
  :catch(warn)     // Warns: Error message</code></pre>

        <h3>Timeout and Cancellation</h3>
        <pre><code>-- Timeout handling
fetchPlayerData(playerId)
  :timeout(5, "Request timed out after 5 seconds")
  :andThen(function(data)
    // Process data
  end)
  :catch(function(error)
    if error:find("timed out") then
      // Handle timeout specifically
      UI:ShowTimeoutMessage()
    else
      // Handle other errors
      warn("Other error:", error)
    end
  end)

-- Manual cancellation pattern
function cancellableOperation()
  local cancelled = false
  
  local promise = Promise.new(function(resolve, reject)
    local connection
    connection = someEvent:Connect(function(...)
      if cancelled then
        connection:Disconnect()
        reject("Cancelled")
        return
      end
      
      resolve(...)
    end)
  end)
  
  return {
    promise = promise,
    cancel = function()
      cancelled = true
    end
  }
end</code></pre>

        <h3>Error Handling Patterns</h3>
        <pre><code>-- Try/catch pattern
Promise.new(function(resolve, reject)
  local success, result = pcall(riskyOperation)
  if success then
    resolve(result)
  else
    reject(result)
  end
end)

-- Error recovery
fetchData()
  :catch(function(error)
    warn("Primary source failed:", error)
    return fetchFromBackup()  // Fallback
  end)
  :andThen(processData)

-- Retry pattern
function withRetry(operation, maxRetries, delay)
  return Promise.new(function(resolve, reject)
    local attempts = 0
    
    local function attempt()
      attempts = attempts + 1
      
      operation()
        :andThen(resolve)
        :catch(function(error)
          if attempts >= maxRetries then
            reject(string.format("Failed after %d attempts: %s", 
                   attempts, error))
          else
            task.wait(delay * attempts)  // Exponential backoff
            attempt()
          end
        end)
    end
    
    attempt()
  end)
end</code></pre>

        <h3>Utility Functions</h3>
        <pre><code>-- Promise.defer() (deferred promise)
local promise, resolve, reject = Promise.defer()

// Use resolve/reject later
task.spawn(function()
  task.wait(1)
  resolve("Done!")
end)

-- Promise.yield() (yield promise)
Promise.yield(0.5):await()  // Equivalent to task.wait(0.5)

-- Promise.promisify() (callback to promise)
local oldStyleFunction = function(callback)
  task.wait(1)
  callback("result")
end

local promisedFunction = Promise.promisify(oldStyleFunction)
promisedFunction():andThen(print)  // Prints: result</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Nexus uses Promises for all async operations
local Nexus = require(script.NexusRemote).new()

-- InvokeAsync returns a Promise
Nexus:InvokeAsync("GetInventory")
  :andThen(function(inventory)
    UI:DisplayInventory(inventory)
  end)
  :catch(function(error)
    UI:ShowError(error.error)
  end)

-- Batch operations with Promise.all
local promises = {
  Nexus:InvokeAsync("GetStats"),
  Nexus:InvokeAsync("GetAchievements"),
  Nexus:InvokeAsync("GetFriends")
}

Promise.all(promises)
  :andThen(function(results)
    local stats, achievements, friends = unpack(results)
    Profile:Update(stats, achievements, friends)
  end)

-- Timeout integration
Nexus:Invoke("ComplexOperation", data)
  :timeout(10)
  :andThen(handleSuccess)
  :catch(function(error)
    if error:find("timed out") then
      // Handle Nexus timeout
    end
  end)</code></pre>
      `
    }
  ],

  "CircuitBreaker": [
    {
      "title": "CircuitBreaker Module",
      "content": `
        <p>The CircuitBreaker module implements the circuit breaker pattern to prevent system overload and provide graceful degradation.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Circuit breaker pattern implementation</li>
          <li>Automatic state transitions (closed → open → half-open)</li>
          <li>Configurable failure and success thresholds</li>
          <li>Timeout-based automatic recovery</li>
          <li>State monitoring and statistics</li>
        </ul>

        <h3>Circuit States</h3>
        <div class="mermaid">
          stateDiagram-v2
            [*] --> Closed
            Closed --> Open: Failures >= threshold
            Open --> HalfOpen: Timeout elapsed
            HalfOpen --> Closed: Successes >= threshold
            HalfOpen --> Open: Failure occurs
            Closed --> [*]: Normal operation
        </div>

        <table class="state-table">
          <tr><th>State</th><th>Behavior</th><th>Transitions To</th></tr>
          <tr><td>Closed</td><td>Normal operation, all requests pass</td><td>Open (on failure threshold)</td></tr>
          <tr><td>Open</td><td>Fail-fast, no requests pass</td><td>Half-open (after timeout)</td></tr>
          <tr><td>Half-open</td><td>Test requests, limited traffic</td><td>Closed (on success) or Open (on failure)</td></tr>
        </table>

        <h3>Basic Usage</h3>
        <pre><code>local CircuitBreaker = require(script.CircuitBreaker).new()

-- Configure circuit breaker
CircuitBreaker.config = {
  failureThreshold = 5,   // Open after 5 failures
  successThreshold = 2,   // Close after 2 successes in half-open
  timeout = 30            // Stay open for 30 seconds
}

-- Check if operation can proceed
local canExecute = CircuitBreaker:CanExecute("PurchaseService")
if not canExecute then
  return {success = false, error = "Service temporarily unavailable"}
end

-- Record operation outcome
local success, result = pcall(purchaseFunction)
if success then
  CircuitBreaker:RecordSuccess("PurchaseService")
else
  CircuitBreaker:RecordFailure("PurchaseService")
end</code></pre>

        <h3>State Management</h3>
        <pre><code>-- Manual state checking
local breaker = CircuitBreaker.breakers["PurchaseService"]
if breaker then
  print("Current state:", breaker.state)  // closed, open, or half-open
  print("Failure count:", breaker.failures)
  print("Success count:", breaker.successes)
  print("Last failure:", breaker.lastFailure)
end

-- Automatic state transitions
// 1. Closed → Open: When failures >= failureThreshold
// 2. Open → Half-open: After timeout seconds
// 3. Half-open → Closed: When successes >= successThreshold
// 4. Half-open → Open: On any failure

-- Manual state override (for maintenance)
CircuitBreaker.breakers["PurchaseService"] = {
  state = "open",
  failures = 0,
  successes = 0,
  lastFailure = os.clock(),
  manualOverride = true
}</code></pre>

        <h3>Integration Patterns</h3>
        <pre><code>-- Wrapping functions with circuit breaker
function withCircuitBreaker(name, operation, fallback)
  return function(...)
    if not CircuitBreaker:CanExecute(name) then
      if fallback then
        return fallback(...)
      end
      return nil, "Circuit breaker open"
    end
    
    local success, result = pcall(operation, ...)
    
    if success then
      CircuitBreaker:RecordSuccess(name)
      return result
    else
      CircuitBreaker:RecordFailure(name)
      if fallback then
        return fallback(...)
      end
      return nil, result
    end
  end
end

-- Example usage
local safePurchase = withCircuitBreaker(
  "PurchaseService",
  purchaseItem,
  function(...)
    return {success = false, error = "Service unavailable"}
  end
)

-- Promise-based integration
function promiseWithCircuitBreaker(name, promiseFactory)
  return Promise.new(function(resolve, reject)
    if not CircuitBreaker:CanExecute(name) then
      reject("Circuit breaker open")
      return
    end
    
    promiseFactory()
      :andThen(function(value)
        CircuitBreaker:RecordSuccess(name)
        resolve(value)
      end)
      :catch(function(error)
        CircuitBreaker:RecordFailure(name)
        reject(error)
      end)
  end)
end</code></pre>

        <h3>Monitoring and Metrics</h3>
        <pre><code>-- Get circuit breaker status
local function getBreakerStatus(name)
  local breaker = CircuitBreaker.breakers[name]
  if not breaker then
    return {state = "not_configured"}
  end
  
  return {
    state = breaker.state,
    failures = breaker.failures,
    successes = breaker.successes,
    lastFailure = breaker.lastFailure,
    timeSinceFailure = os.clock() - breaker.lastFailure,
    isOpen = breaker.state == "open",
    isHalfOpen = breaker.state == "half-open",
    isClosed = breaker.state == "closed"
  }
end

-- Health check endpoint
local function healthCheck()
  local services = {
    "PurchaseService",
    "InventoryService",
    "DataService"
  }
  
  local status = {}
  for _, service in ipairs(services) do
    status[service] = getBreakerStatus(service)
  end
  
  return status
end</code></pre>

        <h3>Advanced Configuration</h3>
        <pre><code>-- Dynamic configuration based on load
local function configureBasedOnLoad()
  local playerCount = #Players:GetPlayers()
  
  if playerCount > 100 then
    -- Stricter limits under high load
    CircuitBreaker.config.failureThreshold = 3
    CircuitBreaker.config.timeout = 60
  else
    -- Normal operation
    CircuitBreaker.config.failureThreshold = 5
    CircuitBreaker.config.timeout = 30
  end
end

-- Service-specific configurations
local serviceConfigs = {
  PurchaseService = {
    failureThreshold = 3,  // More sensitive
    timeout = 60,
    successThreshold = 3
  },
  DataService = {
    failureThreshold = 10,  // More tolerant
    timeout = 10,
    successThreshold = 1
  }
}

function getServiceConfig(serviceName)
  return serviceConfigs[serviceName] or CircuitBreaker.config
end</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic circuit breaking in Nexus
local Nexus = require(script.NexusRemote).new()

// All remote invocations automatically use circuit breakers
// Failures are recorded automatically
// Open circuits prevent further requests

-- Custom circuit breaker configuration
Nexus:RegisterRemote("PurchaseItem", "Function", {
  performance = {
    circuitBreaker = {
      failureThreshold = 3,
      timeout = 60
    }
  }
})

-- Manual circuit breaker checks
if not Nexus.circuitBreaker:CanExecute("PurchaseItem") then
  UI:ShowServiceUnavailable()
  return
end

-- Monitoring circuit breaker states
for remoteName, breaker in pairs(Nexus.circuitBreaker.breakers) do
  if breaker.state == "open" then
    warn("Circuit open for:", remoteName, 
          "for", os.clock() - breaker.lastFailure, "seconds")
  end
end</code></pre>
      `
    }
  ],

  "MemoryPool": [
    {
      "title": "MemoryPool Module",
      "content": `
        <p>The MemoryPool module provides object pooling for performance optimization, reducing garbage collection overhead in high-frequency operations.</p>

        <h3>Core Features</h3>
        <ul>
          <li>Object pooling for frequent allocations</li>
          <li>Configurable pool sizes per object type</li>
          <li>Automatic cleanup of unused objects</li>
          <li>Thread-safe acquisition and release</li>
          <li>Performance monitoring and statistics</li>
        </ul>

        <h3>Basic Usage</h3>
        <pre><code>local MemoryPool = require(script.MemoryPool).new()

-- Initialize with pool size
MemoryPool:Initialize(1000)  // Maximum 1000 objects per pool

-- Acquire object from pool
local packet = MemoryPool:Acquire("packet", function()
  // Initializer called if pool is empty
  return {
    id = HttpService:GenerateGUID(false),
    timestamp = os.clock(),
    data = {}
  }
end)

-- Use the object
packet.data = {action = "jump", height = 10}
packet.metadata = {sender = "player123"}

-- Release back to pool
MemoryPool:Release("packet", packet)
// Object is cleared and returned to pool for reuse</code></pre>

        <h3>Pool Configuration</h3>
        <pre><code>-- Pre-configured pools
MemoryPool.pools = {
  packet = {
    objects = {},      // Available objects
    maxSize = 1000,    // Maximum pool size
    created = 0,       // Total created
    reused = 0         // Total reused
  },
  table = {
    objects = {},
    maxSize = 5000
  },
  string = {
    objects = {},
    maxSize = 10000
  }
}

-- Custom pool creation
function createCustomPool(name, maxSize, initializer)
  MemoryPool.pools[name] = {
    objects = {},
    maxSize = maxSize,
    initializer = initializer,
    stats = {created = 0, reused = 0}
  }
end

-- Dynamic pool sizing
function adjustPoolSize(name, newSize)
  local pool = MemoryPool.pools[name]
  if pool then
    pool.maxSize = newSize
    
    // Trim if necessary
    while #pool.objects > newSize do
      table.remove(pool.objects)
    end
  end
end</code></pre>

        <h3>Advanced Usage Patterns</h3>
        <pre><code>-- Scoped acquisition (auto-release)
function withPooledObject(poolName, initializer, callback)
  local obj = MemoryPool:Acquire(poolName, initializer)
  local success, result = pcall(callback, obj)
  MemoryPool:Release(poolName, obj)
  
  if not success then
    error(result)
  end
  
  return result
end

-- Example: Creating a packet
local packet = withPooledObject("packet", 
  function() return {id = generateId()} end,
  function(pkt)
    pkt.data = serializeData(data)
    pkt.timestamp = os.clock()
    return sendPacket(pkt)
  end
)

-- Batch processing with pooling
function processBatch(items, processor)
  local results = {}
  local batchSize = #items
  
  // Acquire all objects first
  local objects = {}
  for i = 1, batchSize do
    objects[i] = MemoryPool:Acquire("workItem", function()
      return {index = i, data = nil}
    end)
  end
  
  // Process
  for i, obj in ipairs(objects) do
    obj.data = items[i]
    results[i] = processor(obj)
  end
  
  // Release all
  for i, obj in ipairs(objects) do
    MemoryPool:Release("workItem", obj)
  end
  
  return results
end</code></pre>

        <h3>Performance Monitoring</h3>
        <pre><code>-- Pool statistics
function getPoolStats(poolName)
  local pool = MemoryPool.pools[poolName]
  if not pool then return nil end
  
  return {
    available = #pool.objects,
    maxSize = pool.maxSize,
    utilization = #pool.objects / pool.maxSize,
    created = pool.stats and pool.stats.created or 0,
    reused = pool.stats and pool.stats.reused or 0,
    hitRate = pool.stats and 
              pool.stats.reused / math.max(1, pool.stats.created) 
              or 0
  }
end

-- Memory savings calculation
function calculateMemorySavings()
  local totalSaved = 0
  
  for name, pool in pairs(MemoryPool.pools) do
    local objectSize = estimateObjectSize(name)
    totalSaved = totalSaved + (#pool.objects * objectSize)
  end
  
  return totalSaved
end

-- Automatic cleanup
MemoryPool:Cleanup()
// Removes excess objects from pools
// Called automatically every 60 seconds</code></pre>

        <h3>Integration with Other Modules</h3>
        <pre><code>-- Integration with Serializer
function serializeWithPool(data)
  return withPooledObject("serializerBuffer",
    function() return {} end,
    function(buffer)
      buffer.data = data
      return Serializer:Serialize(buffer)
    end
  )
end

-- Integration with Validator
function validateWithPool(data, schema)
  return withPooledObject("validationContext",
    function() return {data = {}, schema = {}} end,
    function(ctx)
      ctx.data = data
      ctx.schema = schema
      return Validator:Validate(ctx.data, ctx.schema)
    end
  )
end

-- Packet creation pipeline
function createSecurePacket(remoteName, player, data)
  return withPooledObject("packet",
    function() 
      return {
        id = HttpService:GenerateGUID(false),
        version = 2,
        timestamp = os.clock()
      }
    end,
    function(packet)
      // Serialize with pool
      packet.data = serializeWithPool(data)
      
      // Add metadata
      packet.metadata = {
        sender = player and player.UserId or "server",
        remote = remoteName,
        sessionId = player and Security:GetSessionId(player)
      }
      
      // Calculate checksum
      packet.checksum = Security:CalculateChecksum(packet)
      
      // Sign packet
      packet.signature = Security:SignPacket(packet, player)
      
      return packet
    end
  )
end</code></pre>

        <h3>Best Practices</h3>
        <pre><code>-- 1. Choose appropriate pool sizes
// Small pools for rare objects
// Large pools for frequently used objects
// Monitor hit rates to adjust sizes

-- 2. Always clear objects before release
function safeRelease(poolName, obj)
  if type(obj) == "table" then
    table.clear(obj)
  end
  MemoryPool:Release(poolName, obj)
end

-- 3. Use scoped acquisition for safety
local obj = MemoryPool:Acquire("pool", initializer)
local success, err = pcall(function()
  useObject(obj)
end)
safeRelease("pool", obj)
if not success then error(err) end

-- 4. Monitor pool performance
task.spawn(function()
  while true do
    task.wait(60)
    
    for name, pool in pairs(MemoryPool.pools) do
      local stats = getPoolStats(name)
      if stats.hitRate < 0.5 then
        // Pool is underutilized, consider reducing size
        adjustPoolSize(name, math.floor(pool.maxSize * 0.75))
      elseif stats.hitRate > 0.9 then
        // Pool is overutilized, consider increasing size
        adjustPoolSize(name, math.floor(pool.maxSize * 1.25))
      end
    end
  end
end)</code></pre>

        <h3>Integration with Nexus</h3>
        <pre><code>-- Automatic pooling in Nexus
local Nexus = require(script.NexusRemote).new()

// Nexus automatically uses memory pooling for:
// 1. Packet creation and serialization
// 2. Event batching buffers
// 3. Response objects
// 4. Validation contexts

-- Custom pool configuration
Nexus.memoryPool:Initialize(5000)  // 5000 object pool

-- Manual pooling in handlers
Nexus:On("HighFrequencyEvent", function(player, data)
  // Use pooling for high-frequency events
  local processed = withPooledObject("eventData",
    function() return {} end,
    function(buffer)
      buffer.raw = data
      buffer.processed = processData(data)
      buffer.timestamp = os.clock()
      return buffer.processed
    end
  )
  
  return processed
end)

-- Monitoring pool usage
local poolStats = {}
for name, pool in pairs(Nexus.memoryPool.pools) do
  poolStats[name] = {
    size = #pool.objects,
    maxSize = pool.maxSize,
    utilization = #pool.objects / pool.maxSize
  }
end

Analytics:RecordEvent("MemoryPool", "Stats", poolStats)</code></pre>
      `
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = contentData;
}

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

function loadPageContent(pageId) {
  const content = contentData[pageId];
  if (!content) {
    showNotFound();
    return;
  }
  
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  
  content.forEach(section => {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'content-section';
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = section.title;
    sectionElement.appendChild(titleElement);
    
    const contentElement = document.createElement('div');
    contentElement.className = 'section-content';
    contentElement.innerHTML = section.content;
    sectionElement.appendChild(contentElement);
    
    contentContainer.appendChild(sectionElement);
  });
  
  // Update active navigation
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick')?.includes(pageId)) {
      link.classList.add('active');
    }
  });
  
  // Update page title
  document.title = `Nexus Remote - ${pageId}`;
}

function showNotFound() {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = `
    <div class="not-found">
      <h2>Page Not Found</h2>
      <p>The requested page could not be found.</p>
      <a href="#" onclick="loadPageContent('home')">Return to Home</a>
    </div>
  `;
}

// Update the sidebar navigation to include all pages
const sidebarPages = [
  {id: 'home', name: 'Home'},
  {id: 'RegisterRemote', name: 'RegisterRemote'},
  {id: 'Event Handlers', name: 'Event Handlers'},
  {id: 'Communication', name: 'Communication'},
  {id: 'Fire Events', name: 'Fire Events'},
  {id: 'Invoke Functions', name: 'Invoke Functions'},
  {id: 'Modules', name: 'Modules'},
  {id: 'Validator', name: 'Validator'},
  {id: 'Serializer', name: 'Serializer'},
  {id: 'Security', name: 'Security'},
  {id: 'RateLimiter', name: 'RateLimiter'},
  {id: 'Promise', name: 'Promise'},
  {id: 'CircuitBreaker', name: 'CircuitBreaker'},
  {id: 'MemoryPool', name: 'MemoryPool'}
];

// Initialize sidebar
function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebarPages.forEach(page => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = page.name;
    link.setAttribute('onclick', `loadPageContent('${page.id}')`);
    sidebar.appendChild(link);
  });
}

// Load home page by default
window.onload = function() {
  initSidebar();
  loadPageContent('home');
};

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
