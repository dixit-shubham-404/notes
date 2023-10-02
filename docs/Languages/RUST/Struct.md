# Structure

## User defined Struct with name feild
Example to creeate struct for the user.
```rust
struct User {
    username : String,
    email : String,
    active : bool,
    sign_in_count : u64
}
```

<br/><br/>
Creating object of struct type

```rust
fn main()
{
    let user1 = User{
        email = String::from("abc@gmail.com"),
        username = String::from("abc"),
        active = true,
        sign_in_count = 1
    };
}
```

:::info
while defining object struct attribute can be defined in any order.
:::
<br/>
We can access the values inside struct object using dot notation.  

```rust
fn main()
{
    let user1 = User{
        email = String::from("abc@gmail.com"),
        username = String::from("abc"),
        active = true,
        sign_in_count = 1
    };

    let name = user1.username; // print -> abc
    println!("{}",name);
}
```

<br/>

we can make change the values inside object by making it mutable.
```rust
fn main()
{
    let mut user1 = User{
        email = String::from("abc@gmail.com"),
        username = String::from("abc"),
        active = true,
        sign_in_count = 1
    };

    user1.username = String::from("cba"); 
    println!("{}",user1.username); // print -> cba
}
```
:::info
We have to make entire object mutable we can't make just one feild mutable.
:::
<br/>

We can create object using a function too by passing values to it
```rust
fn main()
{
    let user1 = build_user(String::from("abc"), String::from("abc@gmail.com"));
}

fn build_user(username : String, email : String) -> User{
    User{
        username : username,
        email : email,
        sign_in_count : 1,
        active : true
    }
}
```

<br/>
When the name of function parameter and name of struct variable is same we can use the shorthand notation too.

```rust
fn main()
{
    let user1 = build_user(String::from("abc"), String::from("abc@gmail.com"));
}

fn build_user(username : String, email : String) -> User{
    User{
        username,
        email,
        sign_in_count : 1,
        active : true
    }
}
```

<br/>

We can create one struct object from another struct object

```rust
fn main()
{
    let user1 = build_user(String::from("abc"), String::from("abc@gmail.com"));
    let user2 = User{
        username : String::from("xyz"),
        ..user1 // rest all thing will be copied from user 1
    };

    
}

fn build_user(username : String, email : String) -> User{
    User{
        username,
        email,
        sign_in_count : 1,
        active : true
    }
}
```

<br/>

## Tuple Struct
These are the structs without name feilds.
Example -

```rust
fn main()
{
    struct Color = (i32, i32, i32);

}
```
<br/>

Printing structs directly by using `#[derive(Debug)]` and `{:#?}`/`{:?}`.

```rust
#[derive(Debug)]
struct User {
    username : String,
    email : String,
    active : bool,
    sign_in_count : u64
}

fn main()
{
    let user1 = build_user(String::from("abc"), String::from("abc@gmail.com"));
    println!("{:#?}",user1);
}

fn build_user(username : String, email : String) -> User{
    User{
        username,
        email,
        sign_in_count : 1,
        active : true
    }
}
```

The output will be
```json
User {
    username: "abc",
    email: "abc@gmail.com",
    active: true,
    sign_in_count: 1,
}
```

<br/>

## Method in Struct

In rust methods are functions implemented for struct. Method are similar to functions except they are tied to an instance to struct.  

`implemntation block is used to create methods for struct.`
`when first parameter is self its called method otherwise associative function`

```rust
#[derive(Debug)]
struct Rectangle{
    length : u32,
    breadth : u32
}

impl Rectangle{
    fn area(&self) -> u32{
        self.length * self.breadth;
    }
}

fn main()
{
    let rect = Rectangle{
        length : 10,
        breadth : 5
    }
    println!("The are of rectangle is {}",rect.area()); 
}
```

Now will create methods with extra parameter to accept reference of same struct.

```rust
#[derive(Debug)]
struct Rectangle{
    length : u32,
    breadth : u32
}

impl Rectangle{
    fn area(&self) -> u32{
        self.length * self.breadth
    }

    fn can_hold(&self, rect : &Rectangle) -> bool{
        self.length >= rect.length && self.breadth >= rect.breadth
    }
}

fn main()
{
    let rect = Rectangle{
        length : 10,
        breadth : 5
    }
    println!("The are of rectangle is {}",rect.area()); 
}
```

:::info
We can have multiple implementation block of same struct.
:::

## Associative function in struct.

These are called by `::`.
The example to demonstrate it is.

```rust
#[derive(Debug)]
struct Rectangle{
    length : u32,
    breadth : u32
}

impl Rectangle{
    fn area(&self) -> u32{
        self.length * self.breadth
    }
    fn square(size : u32) -> Rectangle {
        Rectangle{
            length : size,
            breadth : size
        }
    }
}

fn main()
{
    let sq = Rectangle::square(5);
    println!("{:#?}",sq);
}
```