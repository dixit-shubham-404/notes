# Process

A process is a program in execution.
When a binary file is loaded into memory and starts running its called process in computer.

## Process States
- **New** - Its still in the RAM.
- **Ready** - It has just gone into the memory.
- **Running** - When a process has assigned CPU and its doing computation. A proess will be in this state til its finished or need some IO or some higher priority process comes in.
- **Waiting** - When a request comes to waiting state when it wants an IO. Once IO is completed it agains go back to ready state.
- **Finished** - When a process is completed or an error has occured while execution then it goes to finished state.
- **Suspend Block** - When a process is blocked for IO because of someother process, it will go to suspend block state in hard disk. Once IO in unblocked it goes to waiting state.
- **Suspend Ready** - When there are too many process in the ready state , CPU send some process to suspend ready state in hard disk and can bring back later when required.

## Process Control Block
When a process is stoped in middle by CPU its meta information is stored in some data control block so that it can resume executing whenever required, that memory block is called process control block. 

Some components of process control block are - 
- `Process Id`
- `Process State`
- `CPU Register` - like program counter.
- `Account Information` - like how much CPU time consumed, majorily include information related to system.
- `IO Information` - what all IO used, status of those IO, etc.
- `CPU Scheduling Information` - like priority of this process.
- `Memory Information` - like what all blocks are memory blocks were allocated.


