# Ownership in Rust

Ownership is memory management system in rust. Other common memory management system include Garbage Collector and Manual Memory Management.

Comparision between these are

|   | Pros | Cons |
|:--| ---- | ---: |
|**Garbage Collector**| <ul><li>Error free</li><li>faster write time</li></ul> | <ul><li>No control over Memory</li><li>Slower and unpredictable runtime performance</li><li>Large Program Size</li></ul> |
| **Manual Memory Management** | <ul><li>Control over Memory</li><li>Faster runtime</li><li>Small Program Size</li></ul>| <ul><li>Error Prone</li><li>Slower write time</li></ul> |
| **OwnerShip Mode** | <ul><li>Control over Memory</li><li></li>Error free<li>Faster runtime</li><li>Small Program Size</li></ul> | <ul><li>Slower write time(Learning curve of borrow)</li></ul> |


When a program is executed it has two types of memory stacks and heap.
<br/>
Stack memory is allacated at compile time it has stack frames for every function which inturn will have static variable stored. Stack memory is fixed size. The variables inside stack frame should have known fixed size. Life time of data is stack is till the execution of that function.    
<br/><br/>
Heap memory is allocated during runtime as demanded by the application. Life time if data is controlled by application.  
for dynamically allocated data stack store the pointer to heap memory instead of actual data.
<br/><br/>
Accessing data at stack is faster than accessing data at heap as we have to go via stack to heap.

## Ownership rules

- Each value in rust has a variable thats called its owner.
- There can only be one owner at a time.
- When the owner get out of scope value will be dropped.

## Copy vs Move

``` rust 
fn main()
{
    let x = 5;
    let y = x; // deep copy
}
```

In the above case rust will copy value 5 to y as x is in static memory, heap. This can be simply called cloning  

``` rust
fn main()
{
    let s1 = String::from("Hello");
    let s2 = s1; // Move (not shallow copy)

    println!("{}",s1); // this will throw error as s1 is move to s2.
    // error :value borrowed here after move
}
```

In the above exapmle we move variable s1 to s2 completely hence removing existence of s1. If we just want to clone the values and do heavy operation of deep copy. Then we have to do it like this.

```rust
fn main()
{
    let s1 = String::from("Hello");
    let s2 = s1.clone(); // deep copy

    println!("{}",s1); 

}
```

## Ownership and function

``` rust
fn main()
{
    let s1 = String::from("hello");
    takes_ownership(s1);
    println("{}",s1); // this will give error : value borrowed here after move
}
fn takes_ownership(some_string :: String)
{
    println!("{}",some_string);
}
```

In the above example passing variable to a function as parameter is same as assigning it to a different variable, so passing variable to function will take its ownership.  <br/>

The same rule doesn't apply on integer as they are copied not moved so this this will work fine.
```rust
fn main()
{
    let x = 1;
    takes_ownership(x);
    println("{}",x); // this will give error : value borrowed here after move
}
fn takes_ownership(x :: i32)
{
    println!("{}",x);
}
```

One way to avoid it is making a function which takes and gives back the ownership like this.
```rust
fn main()
{
    let s1 = String::from("Hello");
    let s2 = takes_and_gives_back(s1);

}
fn takes_and_gives_back(some_string:String) -> String{
    some_string
}
```
<br/>
The error copying dynamic variables can be solved by passing refernce instead of variable.

```rust
fn main()
{
    let s1 = String::from("hello");
    takes_ownership(&s1);
    println("{}",s1); // this print s1
}
fn takes_ownership(some_string :: &String)
{
    println!("{}",some_string);
}
```

<br/>

:::info
Refernces are immutable by default so we can change it inside another function
:::

<br/>But if we still want to modify the value we can use mutable refernces. For that we have it make variable mutable too.

```rust
fn main()
{
    let mut s1 = String::from("hello");
    takes_ownership(&mut s1);
    println("{}",s1); // this print s1 -> Hello World!
}
fn takes_ownership(some_string :: &mut String)
{
    some_string.push_str(" World!"); 
}
```

<br/>

We cannot borrow refernce of mutable variable more than once in a scope. Like this -
```rust
fn main(){
    let mut s = String::from("Hello");
    let s1 = &mut s;
    let s2 = &mut s; // this will error : second mutable borrow occurs here
}
```
We can make the variable immutable and borrow immutable refernces.

<br/>

We can not have a mutable refernce if a immutable refernce already exist like this.

```rust
fn main(){
    let mut s = String::from("Hello");
    let s1 = & s;
    let s2 = &mut s; // this will error : cannot borrow `s1` as immutable because it is also borrowed as mutable
    println!("s1 = {}, s2 = {}",s1,s2);
}
```

<br/>

:::info
The scope of the refence starts when its first introduced and ends when its last used.
:::

From the above info we can have a hack of declaring mutable refernce when scope of immutable refernce ends.
```rust
fn main(){
    let mut s = String::from("Hello");
    let s1 = & s;
    let s2 = &mut s; // this will error : cannot borrow `s1` as immutable because it is also borrowed as mutable
    println!("s1 = {}",s1);
    let s2 = &mut s; // We can declare mutable reference s2 now as the scope of s1 ends at print statement
}
```
<br/>

:::info
Dangling refernces are the refernces which points to null memory location or location which is allocated to some other program.
:::
<br/>

```rust
fn main(){
    let reference_to_nothing = dangle();
}
fn dangle() -> &String{ //  this will throw error as scope of s will be finished here we can not make pass it back for that we have to static lifetime.
    let s = String::from("hello");
    &s
}
```

<br/><br/>

## Rules of Refernces
1. At any given time either one mutable reference or any number of immutable refernces.
2. Refernces must always be valid.
