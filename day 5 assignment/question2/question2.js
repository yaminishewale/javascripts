// JavaScript source code
console.log("create a class user and modearator and admin")
class user
{
	constructor(name, age, email)
	{
		this.name = name;
		this.age = age;
		this.email=email;
		this.course =[];
		this.lucoin= 0;
	}
	static greet()
	{
		console.log("hellow..........")
	}

	login()
	{
		console.log(`${this.name} has logged in`);
		return this;
	}
	logout()
	{
		console.log(`${this.name} has logged out`);
		return this;
	}

}

class moderator extends user
{
	constructor(name,age,email)
	{
		super(name,age,email);
	}

	addcoin()
	{
		this.lucoin++;
		console.log(`$(this.name) has $(this.lucoin) coins`);
		return this;
	}

	removecoin()
	{
		this.lucoin--;
		console.log(`$(this.name) has $(this.lucoin) coins`);
		return this;
	}
}
class admin extends moderator
{
	addcourse(user,c)
	{
		user.course.push(c);
		console.log(user);

	}
	deleteourse(user,c)
	{
		user.course.pop(c);
		console.log(user);

	}
}

let user1 = new user ('yamini',20,'yam@123.gmail.com')

let user2 = new user ('shreeyash',20,'shree@123.gmail.com')

let mod = new user ('rutu',30,'rutu@123.gmail.com')

let ad = new user ('raj',20,'r@123.gmail.com')

let users = [user1,user2,mod,ad]

users.forEach(element =>{
	console.log(element);
});

user.greet();
admin.addcourse(user1,'python');
admin.addcourse(user1,'java');

user1.login();
user1.addcoins();
user1.addcoins();
user1.logout();