create table users (
	id integer primary key auto_increment,
  title varchar(100) not null,
  notes varchar(144),
  done boolean
);