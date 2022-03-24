# Stacks and Queues
<p align="center">
  <a href="https://github.com/Bytebit-Org/roblox-StacksAndQueues/actions">
      <img src="https://github.com/Bytebit-Org/roblox-StacksAndQueues/workflows/CI/badge.svg" alt="CI status" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="https://discord.gg/QEz3v8y">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" alt="Discord server" />
  </a>
</p>

Stacks and Queues is a simple set of implementations of stack and queue data structures.

## Installation
### roblox-ts
Simply install to your [roblox-ts](https://roblox-ts.com/) project as follows:
```
npm i @rbxts/stacks-and-queues
```

### Wally
[Wally](https://github.com/UpliftGames/wally/) users can install this package by adding the following line to their `Wally.toml` under `[dependencies]`:
```
StacksAndQueues = "bytebit/stacks-and-queues@1.0.2"
```

Then just run `wally install`.

### From model file
Model files are uploaded to every release as `.rbxmx` files. You can download the file from the [Releases page](https://github.com/Bytebit-Org/roblox-StacksAndQueues/releases) and load it into your project however you see fit.

### From model asset
New versions of the asset are uploaded with every release. The asset can be added to your Roblox Inventory and then inserted into your Place via Toolbox by getting it [here.](https://www.roblox.com/library/9181293671/Stacks-and-Queues-Package)

## Documentation
Documentation can be found [here](https://github.com/Bytebit-Org/roblox-StacksAndQueues/tree/master/docs), is included in the TypeScript files directly, and was generated using [TypeDoc](https://typedoc.org/).

## Example
This example uses a `Queue` to track incoming tasks and attempts to process one every `RunService.Heartbeat` event.

<details>
  <summary>roblox-ts example</summary>

  ```ts
  import { Queue } from "@rbxts/stacks-and-queues";
  import { RunService } from "@rbxts/services";

  type Task = {}; // some task type

  export class TaskProcessor {
    private readonly queue = new Queue<Task>();

    public constructor() {
      this.listenForHeartbeats();
    }

    public queueTask(task: Task) {
      this.queue.push(task);
    }

    private listenForHeartbeats() {
      RunService.Heartbeat.Connect(() => {
        if (this.queue.isEmpty()) {
          return;
        }

        this.processTask(this.queue.pop());
      });
    }

    private processTask(task: Task) {
      // some processing stuff
    }
  }
  ```
</details>

<details>
  <summary>Luau example</summary>

  ```lua
  local RunService = game:GetService("RunService")

  local Queue = require(path.to.modules["stacks-and-queues"]).Queue

  local TaskProcessor = {}
  TaskProcessor.__index = TaskProcessor

  function new()
    local self = {}
    setmetatable(self, TaskProcessor)

    self._queue = Queue.new()

    _listenForHeartbeats(self)

    return self
  end

  function TaskProcessor:queueTask(task)
    self.queue:push(task)
  end

  function _listenForHeartbeats(self)
    RunService.Heartbeat:Connect(function
        if (self.queue:isEmpty()) then
          return
        end

        _processTask(self, self.queue:pop())
      end)
  end

  function _processTask(self, task)
    -- some processing stuff
  end

  return {
    new = new
  }
  ```
</details>
