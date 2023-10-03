# Enum and Pattern

## Defining Enums

```rust
enum IpAddrKind{
    V4,
    V6
}

fn main()
{
    let four = IpAddrKind::V4;
}
```

## Example to define enum as a feild in struct

```rust
enum IpAddrKind{
    V4,
    V6
}

struct IpAdd{
    kind: IpAddrKind,
    addr: String
}

fn main(){
    let localhost = IpAddr{
        kind: IpAddrKind::V4,
        addr: String::from("127.0.0.1")
    };

}
```

## Storing variables inside Enums

```rust
enum IpAddrKind{
    V4(String),
    V6(String)
}
enum A{
    A1(i32, i32, u32)
}

fn main()
{
    let localhost = IpAddrKind::V4(String :: from("127.0.0.1"));
    let a = A::A1(23,23,23);
}
```

<br/><br/>

## Option Enum

Most programming languages has the variables which can have some values or can have null. Same is supported by RUST using option Enum.

```rust
enum Option<T>{
    Some(T),
    None,
}
```

Optional enums are added by default in rust scope.

```rust
fn main()
{
    let some_number = Some(5);
    let some_string = Some("a string");
    let absent_number = None;
}
```

## unwrap_or

If we want to unwrap any values from option enum we can use unwrap_or function.
Lets take an example and add one int to one option int.

```rust
fn main(){
    let a = 5;
    let b = Some(10);
    let c = None;
    println!("{}",a + b.unwrap_or(0));
    println!("{}",a + c.unwrap_or(0));
}
```

## Match expression for enum

We can do pattern matching for in rust using match expression.

```rust
enum Color{
    red,
    black,
    green
}
fn main(){
    let x = Color::red;
}
fn println!(x : Color){
    match x{
        Color : red => println!("red");
        Color : black => println!("black");
        Color : green => println!("green");
    }
}

```

Lets take an example of default option int.
```rust
fn main(){
    let five = Some(5);
    println!("{}",plus_one(five));
    let none = None;
    println!("{}",plus_one(none));
}
fn plus_one(x : Option<i32>) -> Option<i32>{
    match x {
        Some(i) => Some(i+1),
        None => None
    }
}
```

:::info
Non exhaustive pattern matching will give error in rust. So to club all remaining cases we can use _ placeholder.
:::

## if let statement

It can be used to compare directly compare option enum in if condition.
``` rust
fn main(){
    let x =  Some(4);
    if let Some(4) == x {
        println!("yoo");

    }
    else
    {
        println!("noo");
    }
}
```