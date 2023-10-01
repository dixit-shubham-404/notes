
# Loops

## Loop Keyword
It can bee used to iterate a condition infinite number of times.

```rust
loop {
    println!("Alive");
}
```

To get out of the loop we can use the break statement inside the if block;

```rust
let mut counter = 1;
loop{
    println!("{}",counter);
    counter +=1;
    if counter == 10
    break;
}
```  
break can also be used to return the values inside the loop.  
```rust
let counter = 5;
let break_value = loop{
        counter +=1;
        if counter == 20
            {
            break counter;
            }
}
println!("counter = {}",break_value);
```  
this will give

```text
counter = 20
```

## While loop  

Example
``` rust
let while_counter = 10;
while while_counter > 2{
    println!("while counter {}",while_counter);
    while_counter-=1;
};
```

## For each loop
This loop can be helped to iterate each element in the array.  

``` rust
let arr= ["hii","how","are","you?"];
for x in arr.iter()
{
    println!("{}",x);
}
```

This will print.  
```text
hii
how
are
you?
```

One application application is to iterate through the range of numbers, last not included.

``` rust
for number in 1..5{
    println!("{}",number);
}
```

This will print.
``` text
1
2
3
4
```