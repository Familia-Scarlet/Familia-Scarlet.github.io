const e=JSON.parse('{"key":"v-00dc494d","path":"/essay/cpp/C__.html","title":"C++","lang":"zh-CN","frontmatter":{"title":"C++","date":"2020-01-01T00:00:00.000Z","description":"const const一般用在代码前面表示常量，只可读不可改，这里用在函数中表示常成员函数： 只读函数，只可读不可改数据成员的值。也就是时候const定义的函数里面的数据成员 的值不可改变 重载单目运算符++ 前置++的效率好，因为没有临时对象的产生 A&amp; operator++()//++i 前置++实现 { ++x;\\t//先自增 ++y; return *this;\\t//后引用 } A operator++(int)\\t//i++ 后置++实现 { //int参数没有任何意义，只是为了区分是前置还是后置形式 A a = *this;\\t//保存对象引用 ++(*this);\\t//自增，调用前面实现的前置++ return a;\\t//返回先前保存的对象 }","head":[["meta",{"property":"og:url","content":"https://familia-scarlet.github.io/essay/cpp/C__.html"}],["meta",{"property":"og:site_name","content":"芙咪莉娅ฅ’ω’ฅ"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"const const一般用在代码前面表示常量，只可读不可改，这里用在函数中表示常成员函数： 只读函数，只可读不可改数据成员的值。也就是时候const定义的函数里面的数据成员 的值不可改变 重载单目运算符++ 前置++的效率好，因为没有临时对象的产生 A&amp; operator++()//++i 前置++实现 { ++x;\\t//先自增 ++y; return *this;\\t//后引用 } A operator++(int)\\t//i++ 后置++实现 { //int参数没有任何意义，只是为了区分是前置还是后置形式 A a = *this;\\t//保存对象引用 ++(*this);\\t//自增，调用前面实现的前置++ return a;\\t//返回先前保存的对象 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://familia-scarlet.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-17T12:31:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"C++"}],["meta",{"property":"article:author","content":"芙咪莉娅"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-17T12:31:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"https://familia-scarlet.github.io/\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-17T12:31:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"芙咪莉娅\\",\\"url\\":\\"https://github.com/Familia-Scarlet\\"}]}"]]},"headers":[{"level":2,"title":"const","slug":"const","link":"#const","children":[]},{"level":2,"title":"重载单目运算符++","slug":"重载单目运算符","link":"#重载单目运算符","children":[]},{"level":2,"title":"内存模型","slug":"内存模型","link":"#内存模型","children":[]},{"level":2,"title":"在main执行之前和之后执行的代码可能是什么","slug":"在main执行之前和之后执行的代码可能是什么","link":"#在main执行之前和之后执行的代码可能是什么","children":[]},{"level":2,"title":"结构体内存对齐问题","slug":"结构体内存对齐问题","link":"#结构体内存对齐问题","children":[]},{"level":2,"title":"指针和引用的区别","slug":"指针和引用的区别","link":"#指针和引用的区别","children":[]},{"level":2,"title":"在传递函数参数时，什么时候该使用指针，什么时候该使用引用呢？","slug":"在传递函数参数时-什么时候该使用指针-什么时候该使用引用呢","link":"#在传递函数参数时-什么时候该使用指针-什么时候该使用引用呢","children":[]},{"level":2,"title":"堆和栈的区别","slug":"堆和栈的区别","link":"#堆和栈的区别","children":[]},{"level":2,"title":"区别以下指针类型","slug":"区别以下指针类型","link":"#区别以下指针类型","children":[]},{"level":2,"title":"new / delete 与 malloc / free的异同","slug":"new-delete-与-malloc-free的异同","link":"#new-delete-与-malloc-free的异同","children":[]},{"level":2,"title":"new和delete是如何实现的","slug":"new和delete是如何实现的","link":"#new和delete是如何实现的","children":[]},{"level":2,"title":"malloc和new的区别","slug":"malloc和new的区别","link":"#malloc和new的区别","children":[]},{"level":2,"title":"既然有了malloc/free，C++中为什么还需要new/delete呢？直接用malloc/free不好吗？","slug":"既然有了malloc-free-c-中为什么还需要new-delete呢-直接用malloc-free不好吗","link":"#既然有了malloc-free-c-中为什么还需要new-delete呢-直接用malloc-free不好吗","children":[]},{"level":2,"title":"被free回收的内存是立即返还给操作系统吗？","slug":"被free回收的内存是立即返还给操作系统吗","link":"#被free回收的内存是立即返还给操作系统吗","children":[]},{"level":2,"title":"宏定义和函数有何区别？","slug":"宏定义和函数有何区别","link":"#宏定义和函数有何区别","children":[]},{"level":2,"title":"宏定义和typedef区别？","slug":"宏定义和typedef区别","link":"#宏定义和typedef区别","children":[]},{"level":2,"title":"变量声明和定义区别","slug":"变量声明和定义区别","link":"#变量声明和定义区别","children":[]},{"level":2,"title":"strlen和sizeof区别？","slug":"strlen和sizeof区别","link":"#strlen和sizeof区别","children":[]},{"level":2,"title":"一个指针占多少字节？","slug":"一个指针占多少字节","link":"#一个指针占多少字节","children":[]},{"level":2,"title":"指针常量和常量指针","slug":"指针常量和常量指针","link":"#指针常量和常量指针","children":[]},{"level":2,"title":"C++的构造函数","slug":"c-的构造函数","link":"#c-的构造函数","children":[]},{"level":2,"title":"左值和右值的理解","slug":"左值和右值的理解","link":"#左值和右值的理解","children":[{"level":3,"title":"1、左值和右值的概念","slug":"_1、左值和右值的概念","link":"#_1、左值和右值的概念","children":[]},{"level":3,"title":"2、左值引用和右值引用","slug":"_2、左值引用和右值引用","link":"#_2、左值引用和右值引用","children":[]}]},{"level":2,"title":"拷贝构造和移动构造","slug":"拷贝构造和移动构造","link":"#拷贝构造和移动构造","children":[]},{"level":2,"title":"对齐规则","slug":"对齐规则","link":"#对齐规则","children":[]},{"level":2,"title":"虚继承与虚函数","slug":"虚继承与虚函数","link":"#虚继承与虚函数","children":[{"level":3,"title":"调用基类的虚函数","slug":"调用基类的虚函数","link":"#调用基类的虚函数","children":[]},{"level":3,"title":"虚函数","slug":"虚函数","link":"#虚函数","children":[]},{"level":3,"title":"虚继承","slug":"虚继承","link":"#虚继承","children":[]}]},{"level":2,"title":"区分虚指针、虚表、虚函数指针、虚函数、虚基类表指针、虚基类表、虚基类指针、虚基类","slug":"区分虚指针、虚表、虚函数指针、虚函数、虚基类表指针、虚基类表、虚基类指针、虚基类","link":"#区分虚指针、虚表、虚函数指针、虚函数、虚基类表指针、虚基类表、虚基类指针、虚基类","children":[{"level":3,"title":"虚函数表与虚函数表指针","slug":"虚函数表与虚函数表指针","link":"#虚函数表与虚函数表指针","children":[]},{"level":3,"title":"虚基类表和虚基类表指针","slug":"虚基类表和虚基类表指针","link":"#虚基类表和虚基类表指针","children":[]}]},{"level":2,"title":"顶层const和底层const","slug":"顶层const和底层const","link":"#顶层const和底层const","children":[]},{"level":2,"title":"数组名和指针（这里为指向数组首元素的指针）区别？","slug":"数组名和指针-这里为指向数组首元素的指针-区别","link":"#数组名和指针-这里为指向数组首元素的指针-区别","children":[]},{"level":2,"title":"override和final","slug":"override和final","link":"#override和final","children":[{"level":3,"title":"override","slug":"override","link":"#override","children":[]},{"level":3,"title":"final","slug":"final","link":"#final","children":[]}]},{"level":2,"title":"野指针和悬空指针","slug":"野指针和悬空指针","link":"#野指针和悬空指针","children":[]},{"level":2,"title":"运行阶段类型识别dynamic_cast","slug":"运行阶段类型识别dynamic-cast","link":"#运行阶段类型识别dynamic-cast","children":[]},{"level":2,"title":"重载、隐藏和重写（覆盖）","slug":"重载、隐藏和重写-覆盖","link":"#重载、隐藏和重写-覆盖","children":[{"level":3,"title":"重载","slug":"重载","link":"#重载","children":[]},{"level":3,"title":"隐藏","slug":"隐藏","link":"#隐藏","children":[]},{"level":3,"title":"重写（覆盖）","slug":"重写-覆盖","link":"#重写-覆盖","children":[]}]},{"level":2,"title":"浅拷贝和深拷贝的区别","slug":"浅拷贝和深拷贝的区别","link":"#浅拷贝和深拷贝的区别","children":[]},{"level":2,"title":"内联函数和宏定义的区别","slug":"内联函数和宏定义的区别","link":"#内联函数和宏定义的区别","children":[]},{"level":2,"title":"大端储存和小端储存","slug":"大端储存和小端储存","link":"#大端储存和小端储存","children":[{"level":3,"title":"判断大端储存和小端储存的程序代码","slug":"判断大端储存和小端储存的程序代码","link":"#判断大端储存和小端储存的程序代码","children":[]}]},{"level":2,"title":"volatile、mutable和explicit关键字的用法","slug":"volatile、mutable和explicit关键字的用法","link":"#volatile、mutable和explicit关键字的用法","children":[]},{"level":2,"title":"内联函数","slug":"内联函数","link":"#内联函数","children":[]},{"level":2,"title":"构造函数或者析构函数中可以调用虚函数吗","slug":"构造函数或者析构函数中可以调用虚函数吗","link":"#构造函数或者析构函数中可以调用虚函数吗","children":[]},{"level":2,"title":"重载++、--","slug":"重载-、","link":"#重载-、","children":[]},{"level":2,"title":"什么情况下编辑器自动生成默认的构造函数？","slug":"什么情况下编辑器自动生成默认的构造函数","link":"#什么情况下编辑器自动生成默认的构造函数","children":[]},{"level":2,"title":"模板类和模板函数的区别是什么？","slug":"模板类和模板函数的区别是什么","link":"#模板类和模板函数的区别是什么","children":[]},{"level":2,"title":"模板的实现可不可以不写在一个文件里面？为什么？","slug":"模板的实现可不可以不写在一个文件里面-为什么","link":"#模板的实现可不可以不写在一个文件里面-为什么","children":[]},{"level":2,"title":"联编","slug":"联编","link":"#联编","children":[]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[{"level":3,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]},{"level":3,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":3,"title":"交换排序","slug":"交换排序","link":"#交换排序","children":[]},{"level":3,"title":"归并","slug":"归并","link":"#归并","children":[]},{"level":3,"title":"基数排序","slug":"基数排序","link":"#基数排序","children":[]},{"level":3,"title":"桶排序","slug":"桶排序","link":"#桶排序","children":[]}]},{"level":2,"title":"static的用法","slug":"static的用法","link":"#static的用法","children":[]}],"git":{"createdTime":1684326693000,"updatedTime":1684326693000,"contributors":[{"name":"Familia","email":"1692662759@qq.com","commits":1}]},"readingTime":{"minutes":43.28,"words":12983},"filePathRelative":"essay/cpp/C++.md","localizedDate":"2020年1月1日","excerpt":"<h2> const</h2>\\n<p>const一般用在代码前面表示常量，只可读不可改，这里用在函数中表示常成员函数： 只读函数，只可读不可改数据成员的值。也就是时候const定义的函数里面的数据成员 的值不可改变</p>\\n<h2> 重载单目运算符++</h2>\\n<p>前置++的效率好，因为没有临时对象的产生</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>A&amp; operator++()//++i 前置++实现\\n{\\n    ++x;\\t//先自增\\n    ++y;\\n    return *this;\\t//后引用\\n}\\nA operator++(int)\\t//i++ 后置++实现\\n{\\n    //int参数没有任何意义，只是为了区分是前置还是后置形式\\n    A a = *this;\\t//保存对象引用\\n    ++(*this);\\t//自增，调用前面实现的前置++\\n    return a;\\t//返回先前保存的对象\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
