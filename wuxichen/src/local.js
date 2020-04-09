export const local = {
    getList(){
        let usesStr = localStorage.getItem("users");
        let users =usesStr?JSON.parse(usesStr):[];
        return users
    },
    add(user){
      let oldUsers = local.getList();
      oldUsers.push(user);
      localStorage.setItem('userList',JSON.stringify(oldUsers));
    },
    getId(id){
        let oldUsers = local.getList();
        return oldUsers.find(item=>item.id == id)
    }
}