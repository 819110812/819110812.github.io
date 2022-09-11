# Leetcode27 -- 移除元素

**题目：**   **难度：** 简单

给你一个数组 `nums` 和一个值 `val`，你需要 原地 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```java
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```




示例 1：

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```


示例 2：

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```



**题目分析**

1. 输出是什么？
   
   这题很明确，输出的的移除元素后的数组长度，并且这个数组是被原地修改

2. 原地修改如何去做？

       结合我们这题的需求，可以使用指针的思想，用指针来不停的把目标数字往后放，最终返回最右侧指针的位置，就是我们的长度

3. 我们的指针如何做呢？

        我们可以定一个指针，用来记录我们的需要交换元素的位置，然后遍历过程中的`index`就是我们拿来交换的元素， 如图：

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidianleetcode27.png)

结合我们的题解代码看会更加容易显眼一下，上code！

**题解：**

java版本：

```java
public class RemoveElementTest {
    public int removeElement(int[] nums, int val) {
        int left = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                continue;
            }
            nums[left] = nums[i];
            left++;
        }
        return left;
    }


    @Test
    public void should_remove_element_successfully_01() {
        int[] nums = new int[]{3, 2, 2, 3};
        int val = 3;
        int res = removeElement(nums, val);
        int expected = 2;
        assertThat(res).isEqualTo(expected);
    }


    @Test
    public void should_remove_element_successfully_02() {
        int[] nums = new int[]{0, 1, 2, 2, 3, 0, 4, 2};
        int val = 2;
        int res = removeElement(nums, val);
        int expected = 5;
        assertThat(res).isEqualTo(expected);
    }
}
```



golang版本：

```go
func removeElement(nums []int, val int) int {
	left := 0
	for i := 0; i < len(nums); i++ {
		if val == nums[i] {
			continue
		}
		nums[left] = nums[i]
		left++
	}
	return left
}

func Test_Should_Get_Correct_Answer(t *testing.T) {
	origin := []int{3, 2, 2, 3}
	val := 3
	res := removeElement(origin, val)
	if res != 2 {
		t.Errorf("Expected 2, got %d", res)
	}
}
```

****

**总结：**

看到数组的题目，习惯性的思考我们是否可以用双指针的思想来做。题目要求返回的是一个长度，这种情况大概率是可以通过指针的标记位置来返回结果的。那么我们应该要解决的问题就是如何使用这个指针，解决这个问题，我们题目的解答自然而然就出来了。
