---
article: true
title: 下一个排列
tag: leetcode
order: 21
---

# 下一个排列

分类： 数组

难度：中等

题目：

整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，`arr = [1,2,3] `，以下这些都可以视作 `arr` 的排列：`[1,2,3]`、`[1,3,2]`、`[3,1,2]`、`[2,3,1]` 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr =`[1,2,3]` 的下一个排列是` [1,3,2]` 。
类似地，arr = `[2,3,1]` 的下一个排列是 `[3,1,2] `。
而 arr =` [3,2,1]` 的下一个排列是` [1,2,3]` ，因为` [3,2,1] `不存在一个字典序更大的排列。
给你一个整数数组 `nums` ，找出 `nums `的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

```
输入：nums = [1,2,3]
输出：[1,3,2]
```

示例 2：

```
输入：nums = [3,2,1]
输出：[1,2,3]
```

示例 3：

```
输入：nums = [1,1,5]
输出：[1,5,1]
```

题目分析：

- 输入输出和限制
  
  输入的是一个数字，没有输出值，要求输入的数组被**原地修改** 且只能用常数级的额外空间。

- 这题需要解决这么两个问题：
  
  - 如何确定下一个数？
    
    - 从题目中可以得知，我们数组排序是一个字典序，这是一个排序规则
  
  - 确定好了如何原地修改？

- 目前细化下来，我们要解决的主要问题就是，字典序排列的规则



> ***字典序问题的规律 （可以选择死记硬背）***
> 
> 给定一个数列，要知道它的字典序，主要知道它变成1,2,3,4.....n需要移动的次数。
> 
> 移动原则是a[i] 从大到小移动，对于每一个数字a[i]，若i前面比a[i] 小的个数正好是a[i] - 1 个，则这个数不需要向后移动以达到目标序列，否则i 后面必然有a[i] - t - 1 (此处t 的值为a[i] 之前比a[i] 小的数字的个数)个比a[i] 小的数，只要把a[i] 移动到比自己小的数后面才能使得移动中的序列正向目标前进。
> 
> 
> 因此只要求出每个数的移动次数，然后相加就是该序列的位置。即每个数到正确位置需要移动的次数为: (a[i] - t-1)*(a[i]-t-1)!



| 字典序值 | 0   | 1   | 2   | 3   | 4   | 5   |
| ---- | --- | --- | --- | --- | --- | --- |
| 排列   | 123 | 132 | 213 | 231 | 312 | 321 |



举个栗子：

给定数列`[3,2,1]`，我们从最左边边的3开始看，3的前面应该有两个元素1，2是小于3的，那么他要变成`[1,2,3]`的正序的情况下，需要挪动`a[i]-0-1` = 2 位（这里是位数不是次数），同理，2需要挪动的次数 `a[i]-0-1`=1 位。那么数列`[3,2,1]`所在字典序的位置应该是 `2*2！+1*1！=5` （`[1,2,3]是0号位`）



再来一个 `[3,1,2]`例子：

3依然是 `a[i]-0-1`=2,

1是`a[i]-0-1`=0, 2是`2-1-1`=0

所以位置是`2*2!`=4



> 下一位排列

下一位字典序排列的思路可以这么来解决：

- 从右向左找到第一个左临小于右临的位置，左临的位置标记为i

- 从右向左找到第一个大于a[i] 的数值，位置为j

- 然后交换位置

- 将i 右边的部分排成正序

如： `[4,2,3,1]`

从1开始：1左侧没有比他小的，

到3，3的左侧有2比他小，3，2互换，变成`[4,3,2,1]`，把`3,2`排序还是`[4,3,2,1]`



变成代码逻辑：

java版本：

```java
public class NextPermutationTest {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i + 1] <= nums[i]) {
            i--;
        }
        if (i >= 0) {
            int j = nums.length - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums, i, j);
        }
        reverse(nums, i + 1, nums.length - 1);
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }


    @Test
    public void should_return_next_permutation_successfully_01() {
        int[] nums = new int[]{1, 2, 3};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{1, 3, 2});
    }


    @Test
    public void should_return_next_permutation_successfully_02() {
        int[] nums = new int[]{3, 2, 1};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{1, 2, 3});
    }


    @Test
    public void should_return_next_permutation_successfully_03() {
        int[] nums = new int[]{1, 3, 2};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{2, 1, 3});
    }


    @Test
    public void should_return_next_permutation_successfully_04() {
        int[] nums = new int[]{1};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{1});
    }

    @Test
    public void should_return_next_permutation_successfully_05() {
        int[] nums = new int[]{5,4,7,5,3,2};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{5,5,2,3,4,7});
    }

    @Test
    public void should_return_next_permutation_successfully_06() {
        int[] nums = new int[]{1,5,1};
        nextPermutation(nums);
        assertThat(nums).isEqualTo(new int[]{5,1,1});
    }

}
```



golang版本：

```go
func nextPermutation(nums []int) {
	right := len(nums) - 2
	for i := right; i >= 0; i-- {
		if i >= 0 && nums[i+1] <= nums[i] {
			right--
		}
	}

	if right >= 0 {
		j := len(nums) - 1
		for j >= 0 && nums[j] <= nums[right] {
			j--
		}
		swap(right, j, &nums)
	}
	reverse(&nums, right+1, len(nums)-1)

}

func swap(i int, j int, nums *[]int) {
	(*nums)[i], (*nums)[j] = (*nums)[j], (*nums)[i]
}

func reverse(nums *[]int, start int, end int) {
	for start < end {
		swap(start, end, nums)
		start++
		end--
	}
}

func Test_nextPermutation(t *testing.T) {
	type args struct {
		nums     []int
		expected []int
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
		{
			name: "case1",
			args: args{
				nums:     []int{1, 2, 3},
				expected: []int{1, 3, 2},
			},
		},
		{
			name: "case2",
			args: args{
				nums:     []int{3, 2, 1},
				expected: []int{1, 2, 3},
			},
		},
		{
			name: "case3",
			args: args{
				nums:     []int{1, 1, 5},
				expected: []int{1, 5, 1},
			},
		},
		{
			name: "case4",
			args: args{
				nums:     []int{1},
				expected: []int{1},
			},
		},
		{
			name: "case5",
			args: args{
				nums:     []int{1, 3, 2},
				expected: []int{2, 1, 3},
			},
		},
		{
			name: "case6",
			args: args{
				nums:     []int{5, 4, 7, 5, 3, 2},
				expected: []int{5, 5, 2, 3, 4, 7},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			nextPermutation(tt.args.nums)
		})
	}
}
```





## 总结

这是一道关于字典序排列的经典题目，在题目分析的时候抓住重点，我们需要解决的问题是字典序的问题，其次是下一个排列。所以这个题目着手点就是字典序的规律，至于这个规律如果之前不知道的话，只能全靠自己去归纳总结了。




