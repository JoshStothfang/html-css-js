class Friend {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    print() {
        console.log(this.name, "|", this.email, "|", this.phone);
    }
}

let larry = new Friend("Larry", "larry@threestooges.com", "123-456-7890");
let curly = new Friend("Curly", "curly@threestooges.com", "098-765-4321");
let moe = new Friend("Moe", "moe@threestooges.com", "123-555-4567");

const friends = [larry, curly, moe];

for (let friend of friends) {
    friend.print();
}