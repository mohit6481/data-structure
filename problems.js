/** 
 *  Add Two Number
 *  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each   of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let carry = false;
    let current = new ListNode();
    let l3 = current;
    let next;
    while(l1 || l2) {
        sum = (l1 && l1?.val !== null ? l1?.val : 0) + (l2 && l2?.val !== null ? l2?.val : 0);
        sum = carry ? sum + 1 : sum;
        current.val = sum % 10;
        carry = sum >= 10 ? true : false;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        if(l1 || l2) {
            next = new ListNode();
            current.next = next;
            current = next;
        }
    }
    if (carry) {
        current.next = new ListNode(1);
    } else {
        current = null;
    }
    return l3;
}

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
// const l1 = new ListNode(0)
// const l2 = new ListNode(0)
const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(3)))))
const l2 = new ListNode(9, new ListNode(9))

// addTwoNumbers(l1, l2)




// Given a string s, find the length of the longest substring without repeating characters.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let index1 = 0;
    let index2 = 1;
    let max = 0;
    let subStr = s[index1];
    while(index2 < s.length) {
        if(subStr.indexOf(s[index2]) === -1) {
            subStr += s[index2];
            index2++;
            if(index2 === s.length) {
                max = subStr.length > max ? subStr.length : max;
            }
        } else {
            max = subStr.length > max ? subStr.length : max;
            index1++;
            index2 = index1 + 1;
            subStr = s[index1];
        }
    }
    if (s && s.length === subStr.length) {
        max = subStr.length > max ? subStr.length : max;
    }
    return max;
};

// lengthOfLongestSubstring('abcabcbb')
// lengthOfLongestSubstring('bbbbb')
// lengthOfLongestSubstring('pwwkew')



// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;
    let arr = [];
    while(index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] <= nums2[index2]) {
            arr.push(nums1[index1]);
            index1++;
        } else {
            arr.push(nums2[index2]);
            index2++;
        }
    }
    arr = [...arr, ...nums1.slice(index1), ...nums2.slice(index2)];
    let mid = Math.floor(arr.length / 2);
    if(arr.length % 2 != 0) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
};

findMedianSortedArrays([1, 3], [2])
findMedianSortedArrays([1, 2], [3, 4])



// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
*/
var longestPalindrome = function(s) {
    let size = s.length;
    const isPalindrome = (str) => {
        let temp =''
        for(let i = str.length - 1; i >= 0; i--) {
            temp += str[i]
        }
        if (str === temp) return true;
        return false;
    }

    while (size > 0) {
        let index1 = 0;
        let index2 = index1 + size - 1;
        let subStr = '';
        while(index2 < s.length) {
            subStr = s.substring(index1, index2 + 1);
            if (isPalindrome(subStr)) return subStr;
            else {
                index1++;
                index2++;
            }
        }
        size--;
    }
};

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('abcba'))