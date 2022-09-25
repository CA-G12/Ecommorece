BEGIN ;

drop table if exists products,cart_item, users cascade;
create table users (
    id serial primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email  varchar(255) not null unique, 
    password text  not null,
    img_url text default 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
);

create table products (
    id serial PRIMARY KEY,
    name varchar(30) not null,
    description text not null,
    price float not null,
    category VARCHAR(100) not NULL,
    img_url text not null 
);
create table cart_item (
    id serial PRIMARY KEY,
    product_id int not null ,
    user_id int not null ,
    quantity int not null default 1,
    foreign key (product_id) references products(id) on delete cascade,
    foreign key (user_id) references users(id) on delete cascade
);

COMMIT;