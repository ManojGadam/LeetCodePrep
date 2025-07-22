/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head.next)return head
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    for(let i=0;i<left-1;i++){
        prev = prev.next
    }
    // 'start_node' will be the first node of the segment to be reversed (at position 'left')
    let start_node = prev.next;
    // 'current_node' will be the node that we are currently moving (initially at position 'left + 1')
    let current_node = start_node.next;

    // 2. Perform the reversal in a single pass
    // We will do (right - left) reversals (e.g., if left=2, right=4, we move nodes at 3 and 4)
    for (let i = 0; i < right - left; i++) {
        let next_node_to_move = current_node.next; // Store the next node before breaking current_node's link

        // Re-point current_node: its next should point to what prev.next was pointing to.
        // This effectively inserts current_node right after prev.
        current_node.next = prev.next; 

        // Re-point prev: prev.next should now point to current_node.
        prev.next = current_node;

        // Re-point start_node: its next should point to the next_node_to_move.
        // This ensures the connection to the unreversed part is maintained.
        start_node.next = next_node_to_move;

        // Move current_node to the next node in the original sequence
        current_node = next_node_to_move;
    }

    return dummy.next
};