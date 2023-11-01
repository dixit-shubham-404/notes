# Module System

Rust has packeges to make the code modular. Packages have crate. A create can be binary crate which we can execute or library crate.

```shell
cargo new <package-name>
```

this creates a new package in rust.
Rust follows a convention like if you have main.rs defined in your source directory then automatically binary package will be created and `main.rs` will the crate route.
Crate Route is the source file which rust compiler starts at whilebuilding your crate.

If `lib.rs` is created on your root directory then rust will automatically create a library crate.

## Rules around crate
1. A package should have atleast once crate.
2. A package can have 0 or 1 library create.
3. A package can have any number number of binary crate.

If we want more more number of binary crate we can make a folder `lib` inside root directory and create library crate inside it.

To make a project with library create we can do
```shell
cargo new --lib <package-name>
```

## Module

Syntax to create a module
```rust
mod <module-name>{

}
```

<br/>
Module can more module inside them hence following nested structure.

An example would be
```rust
mod front_of_house{
    mod hosting{
        fn add_to_waitlist();
        fn seat_at_table();
    }

    mod serving{
        fn take_order();
        fn serve_order();
        fn take_payments();
    }
}
```

In order to access resources inside the module we have to specify the path. It can be either absolute path or relative path.
```rust
mod front_of_house{
    pub mod hosting{
        pub fn add_to_waitlist();
        fn seat_at_table();
    }
}
pub fn eat_at_restaurant(){
    //Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    //Relative PAth
    front_of_house::hosting::add_to_waitlist();
}
```

A child module is private to parent module. So we added `pub` keyword.
A child module can see anything defined on parent module.

Accessing parent and sibling resource.
```rust
fn serve_order();

mod front_of_house{
    fn fix_incorrect_order(){
        cook_order();
        super::serve_order();
    }

    fn cook_order();
}
```
