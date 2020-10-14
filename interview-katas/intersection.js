function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    let intersection = [];
    let pointer = 0;
  
    
    for (let i = 0; i < nums2.length; i++){
        let index = nums1.indexOf(nums2[i], pointer + 1);

        console.log(index);
        
        if (index !== -1) {
          intersection.push(nums2[i]);
          pointer = index;
        }
      }
  return intersection;
};

let arr1 = [9, 4, 9, 8, 4];
let arr2 = [4, 9, 5];

console.log(intersect(arr1, arr2));

