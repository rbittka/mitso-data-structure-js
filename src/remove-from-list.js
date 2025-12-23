function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  const dummy = new ListNode(0);
  dummy.next = l;
  
  let prev = dummy;
  let current = l;
  
  while (current !== null) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  
  return dummy.next;
}

module.exports = {
  removeKFromList
};
