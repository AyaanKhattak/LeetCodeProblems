# Add values of linkedlist and make sure the digits are single 

class ListNode:
    def __init__(self,val=0,next=None):
        self.val=val
        self.next=next


def addTwoNum(l1:ListNode,l2:ListNode)->ListNode:
    dummy_head=ListNode()
    curr=dummy_head
    carry=0

    while l1 or l2 or carry:

        v1=l1.val if l1 else 0
        v2=l2.val if l2 else 0

        
        carry,sum=divmod(v1+v2+carry,10)

        curr.next=ListNode(sum)
        curr=curr.next

        l1 =l1.next if l1 else None
        l2 =l2.next if l2 else None

    return dummy_head.next

def create_linked_list(lst):
    head=ListNode(lst[0])
    current=head
    for num in lst[1:]:
        current.next=ListNode(num)
        current=current.next
    return head

def print_linked_list(head):
    while head:
        print(head.val,end='->' if head.next else "\n")
        head=head.next


l1=create_linked_list([2,4,3])
l2=create_linked_list([5,6,4])

result=addTwoNum(l1,l2)

print_linked_list(result)


