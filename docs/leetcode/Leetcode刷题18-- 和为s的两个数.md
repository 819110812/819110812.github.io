---
article: true
title: 和为s的两个数
tag: leetcode
category: 数组
order: 18
---

# Leetcode刷题18-- 和为s的两个数

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：

```
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
```

示例 2：

```
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```



解法 ： 头尾双指针遍历

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left,right = 0,(len(nums)-1)
        while(left<right):
            sums = nums[left] +nums[right]
            if sums == target:
                return [nums[left],nums[right]]
            elif target>sums:
                left+=1
            else:
                right-=1
        return []
```

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)