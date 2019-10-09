class Node{
    constructor(node){
        this.node=node;
        this.next=null;
        this.prev=null;
    }
}

class Link{
    constructor(){
        this.header=new Node('header');
    }
    add(newNode,node){
        //增加节点 newNode,新插入的节点，node,要插入那个节点之后
        //1(curData),3,2(newData); 2要插入1,3之间。2的next=1的next(3);1的next=2,2的prev是1,
        //向1后面添加2，
        let newData=new Node(newNode);
        let curData=this.find(node);
        newData.next = curData.next;
        newData.prev = curData;
        curData.next = newData;
    }
    del(node){
        //删除节点 node要删除的节点
        //1,2,3 .要删除2,即将1的next换成1的next(2)的next。将2的prev(1)的next换成2的next(3),3的prev换成1
        let curData = this.find(node);
        if(curData.next !== null){
            curData.prev.next=curData.next;
            curData.next.prev=curData.prev;
            curData.prev=null;
            curData.next=null;
        }
    }
    find(node){
        // 查找节点
        let curData=this.header;
        while(curData.node != node){
            curData=curData.next;
        }
        // console.log(node,curData);
        return curData ;
    }
    findLast() {
         // 查找最后一个节点
         let curData=this.header;
         while(curData.next !== null){
             curData=curData.next;
         }
        console.log(curData);
         return curData;
    }
    show(){
        //显示链表
        let curData=this.header;
        while(!(curData.next === null)){
            console.log('链表节点: ',curData.next.node);
            console.log('链表节点: ',curData.next);

            curData=curData.next;
        }
    }
    showReverse(){
        //反向显示链表
        let curData=this.findLast();
        while(!(curData.prev === null)){
            console.log('链表节点: ',curData.node);
            console.log('链表节点: ',curData);

            curData=curData.prev;

        }
    }
}