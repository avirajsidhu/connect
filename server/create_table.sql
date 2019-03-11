use foobar;
create table if not exists users (name varchar(25), username varchar(25), email varchar(40) , password varchar(30), registartion_date_time datetime, primary key (username));
create table if not exists feed (feed_id int auto_increment not null, username varchar(25), picture blob not null  , post_date_time datetime, primary key (feed_id), foreign key (username) references users(username));
