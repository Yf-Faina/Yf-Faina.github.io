---
icon: pen-to-square
date: 2024-01-06
category:
  - 算法
tag:
  - 专业实训
---
# 专业实训记录1

> 以下是我$2023-2024$大二学年第一学期末进行的专业实训针对部分题目的一个记录（是课程要求提交的实验报告），关于贪心算法和分治算法/二分查找在暑假集训时我已经进行过学习以及针对这两个算法进行了详细的知识点记录和例题（模板题）记录，这里也就不再赘述。这里的四道题写的和分析的还是挺仔细的，不传上来好像又有一些亏了，所以就上传在这里。

<!-- more -->

## **贪心及分治**

### **贪心算法**

#### **问题C：活动选择**

**题目描述**：学校在最近几天有$n$个活动，这些活动都需要使用学校的大礼堂，在同一时间，礼堂只能被一个活动使。由于有些活动时间上有冲突，学校办公室人员只好让一些活动放弃使用礼堂而使用其他教室。 　　

 现在给出个活动使用礼堂的起始时间和结束时间$e_i(b_i < e_i\leq32767)$，请你帮助办公室人员安排一些活动来使用礼堂，要求安排的活动尽量多。

**输入**：第一行一个整数$n(n\leq1000)$;
          接下来的n行，每行两个整数，第一个$bi$，第二个是$e_i(b_i < e_i\leq32767)$

**输出**：输出最多能安排的活动个数

**Sample Input**:

```
11
3 5
1 4
12 14
8 12
0 6
8 11
6 10
5 7
3 8
5 9
2 13
```

**Sample Output**:

```
4
```

该题的**贪心策略**为：

优先选择时间短，结束时间早的活动，这样可以安排更多的活动。

```cpp
//活动安排
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
struct act{
    int bi,ei; //开始时间，结束时间
}a[1005];
bool cmp(act a,act b)
{
    return a.ei < b.ei;
}
int main()
{
    int n;
    cin >> n;
    for(int i=0;i<n;i++)
    {
        cin >> a[i].bi >> a[i].ei;
    }
    sort(a,a+n,cmp); //按结束时间从小到大排序
    int x = 1,tm = a[0].ei;
    for(int i=1;i<n;i++){
        if(a[i].bi >= tm){
            x++;   //如果下一个活动的开始时间大于等于上一个活动的结束时间，就可以安排
            tm = a[i].ei; //更新结束时间
        }
    }
    cout << x << endl;
    return 0;
}
```

#### **问题D：删数问题**

**题目描述**：输入一个高精度的正整数$N$，去掉其中任意$S$个数字后剩下的数字按原左右次序组成一个新的正整数。编程对给定的$N$和$S$，寻找一种方案使得剩下的数字组成的新数最小。

输出新的正整数。（$N$不超过$240$位）输入数据均不需判错。

**输入**：$n$和$s$

**输出**：最后剩下的最小数

**Sample Input**:

```
175438
4
```

**Sample Output**:

```
13
```

该题的**贪心策略**为：

1. 从左往右扫描数字，找到第一个比自己右侧数字大的数字，将该数字删除；
2. 如果没有找到这样的数字，说明所有数字都是递增的，直接删除最后一个数字；
3. 重复上述过程，直到删除了$k$个数字为止。
4. **注意前导$0$的删除。**

**代码**：

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string n; 
    int k;     
    cin >> n >> k;

    string res = "";  
    int len = n.size(); 

    if (k >= len)    //如果要删除的数的个数比数总数还多，那么程序直接结束
    {
        cout << 0 << endl;
        return 0;
    }

    int cnt = 0;    //计数器，记录删掉了几个数
    for (int i = 0; i < len; i++)
    {
        while (cnt < k && !res.empty() && res.back() > n[i])  //当找到第一个比自己右侧数字大的数字
        {
            res.pop_back();   //删除
            cnt++;            //计数加一
        }
        res.push_back(n[i]); 
    }

    while (cnt < k)   //当符合上述条件的数字删完以后尚未达到k个的话就把剩下的也都删了
    {
        res.pop_back();
        cnt++;
    }

    int i = 0;
    while (i < res.size() && res[i] == '0') i++;
    if (i == res.size()) cout << 0 << endl;
    else cout << res.substr(i) << endl;

    return 0;
}
```

---

### 分治算法

#### **问题C：求逆序对 （归并排序）**

**题目描述**：给定一个序列$a_1$,$a_2$,…,$a_n$，如果存在$i$<$j$并且$a_i$>$a_j$，那么我们称之为逆序对，求逆序对的数目。

注意：$n<=10^5$，$a_i<=10^5$

**输入**：第一行为$n$,表示序列长度。
          接下来的$n$行，第$i+1$行表示序列中的第$i$个数。

**输出**：所有逆序对总数。

**Sample Input**:

```
4
3
2
3
2
```

**Sample Output**:

```
3
```

逆序对的概念：逆序对，设 $A$ 为一个有 $n$ 个数字的有序集 $(n$＞$1)$，其中所有数字各不相同。

如果存在正整数 $i$, $j$ 使得 $1≤i$<$j≤n$ 而且 $A[i] > A[j]$，则 $<A[i], A[j]>$ 这个有序对称为 A 的一个**逆序对**，也称作逆序数。

那么如果使用暴力法的思路：使用嵌套循环，不断搜索当前位数字的后面存在几个比该数小的数字，并使用计数器 `cnt`计数

```cpp
#include <iostream>
using namespace std;
const int N = 1e5+5;
int a[N];
int main(){
    int n;
    cin >> n;
    for(int i=0;i<n;i++) cin >> a[i];
    int cnt = 0;
    for(int i=0;i<n;i++){
        for(int j=i;j<n;j++){
            if(a[j] < a[i]) cnt++;
        }
    }
    cout << cnt << endl;
    return 0;
}
```

但是该题的数据规模达到了$10^5$，双重循环的时间复杂度为$O(n^2)$，所以如果使用暴力法，本题一定超时。

我们可以联想到，在使用归并排序的合并过程中会产生逆序对，我们只需要对输入的每组数据进行归并排序，并在合并过程中，判断前后两个数的大小是否构成逆序对，并计数即可。

**代码**：

```cpp
#include <iostream>
using namespace std;

// 合并两个有序子数组，并统计逆序对的个数
long long merge(int arr[], int temp[], int left, int mid, int right) {
    int i = left;
    int j = mid + 1;
    int k = left;
    long long count = 0; // 用于统计逆序对的个数

    // 合并两个有序子数组
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            count += mid - i + 1; // 统计逆序对的个数
        }
    }

    // 处理剩余的元素
    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= right) {
        temp[k++] = arr[j++];
    }

    // 将临时数组中的排序结果复制回原数组
    for (int p = left; p <= right; p++) {
        arr[p] = temp[p];
    }

    return count;
}

// 归并排序并统计逆序对的个数
long long mergeSort(int arr[], int temp[], int left, int right) {
    long long count = 0; // 统计逆序对的个数

    if (left < right) {
        int mid = (left + right) / 2;
        // 递归排序左右两个子数组
        count += mergeSort(arr, temp, left, mid);
        count += mergeSort(arr, temp, mid + 1, right);
        // 合并两个有序子数组并统计逆序对的个数
        count += merge(arr, temp, left, mid, right);
    }

    return count;
}

int main() {
    int n;
    cin >> n;
    int arr[n], temp[n];

    // 输入数组元素
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // 调用归并排序函数并输出逆序对的个数
    long long count = mergeSort(arr, temp, 0, n - 1);
    cout << count << endl;

    return 0;
}
```

#### **问题E：剪绳子 （实数二分答案）**

**题目描述**：有$N$根绳子，第$i$根绳子长度为$L_i$，现在需要$M$根等长的绳子，你可以对$N$根绳子进行任意裁剪（不能拼接），请你帮忙计算出这$M$根绳子最长的长度是多少。

**输入**：第一行包含$2$个正整数$N$、$M$，表示原始绳子的数量和需求绳子的数量。

 第二行包含$N$个整数，其中第$i$ 个整数$L_i$表示第$i$根绳子的长度。

已知：$1≤N,M≤100000$, $ 0<Li<10^9$

**输出**：输出一个数字，表示裁剪后最长的长度，保留两位小数。

**Sample Input**:

```
3 4
3 5 4
```

**Sample Output**:

```
2.50
```

::: tip
第一根和第三根分别裁剪出一根$2.50$长度的绳子，第二根剪成$2$根$2.50$长度的绳子，刚好$4$根。（浮点数二分）
:::
二分查找运用了分治法的思想。本题的基本思路是枚举不同的情况，直到找到符合题目要求的值，但是枚举的时间复杂度高，本题数据规模大，会超时，所以采用实数二分查找答案的方法，只需要得到满足一定精度条件的近似解就可以（本题是保存两位小数）

```cpp
#include <iostream>
using namespace std;
int n,m;
double a[100005];
//检查枚举到的绳子的长度是否符合要求
bool check(double mid){
    int cnt = 0;
    for(int i=0;i<n;i++){
        cnt += (int)(a[i]/mid);
    }
    return cnt >= m;
}
int main()
{
    cin >> n >> m;
    int max = -1;
    for(int i=0;i<n;i++) {
        cin >> a[i];
        if(a[i] > max) max = a[i];
    }
    double l = 0, r = max;
    while(r-l > 0.0001){
        double mid = (l+r)/2;
        if(check(mid)) l = mid;
        else r = mid;
    }
    printf("%.2lf",r);  //控制精度
    return 0;
}
```

二分法的难点在于如何建模和 `check()`函数检查条件，其中可能会套用其他算法或者数据结构
