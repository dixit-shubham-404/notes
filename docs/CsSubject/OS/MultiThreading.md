# Multithreading

**MultiTasking** - We can do multiple task/process at the same time.

**MultiThreading** - We can do multiple jobs/threads with in the same process. 

```
Threads are also called lightweight processes.
```

## Advantages
- Paralellism and improved performance
- Responsiveness
- Better Resource Utilization

## Disadvantages
- Difficulity in writing, testing and debugging code.
- can lead to deadlock and race condition

## Thread Vs Process

Process is a program in execution. 
In case of single threaded application we will require only one stack from memory. In case of multi-threaded application we will have multiple stacks in memory.
But all the threads will have same heap, data and code. 

### Differences
- Threads are faster to create and terminate.
- Multiple threads in a process share same address space. It makes then easier to communicate.
- Context switching is lighter in threads.


## User threads Vs Kernal Threads

|                          | **User Managed Threads**  | **Kernal Managed Thread** |
| -----------------------  | ------------------------- | ------------------------ |
| Management | In User Space | In Kernal Space |
| Context Switching | Fast | Slow |
| Blocking | One thread might block all the threads | A thread block itself only |
| Multicore or Multiprocessor | Cannot take advantage of multi-core system. Only concurrent execution on single processor. | Take full advantage of multi-core system. |
| Creation or Termination | Fast | Slow |