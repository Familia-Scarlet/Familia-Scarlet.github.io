import{_ as e,o as i,c as n,a as s}from"./app-09c9e424.js";const r={},d=s(`<h2 id="软件工程的三要素" tabindex="-1"><a class="header-anchor" href="#软件工程的三要素" aria-hidden="true">#</a> 软件工程的三要素</h2><p>软件工程包括三个要素：方法、工具和过程。</p><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><h3 id="类适配器模式" tabindex="-1"><a class="header-anchor" href="#类适配器模式" aria-hidden="true">#</a> 类适配器模式</h3><p>如果想扩展一个已经存在的类的功能，可以使用适配器。定义一个接口，定义一个继承被扩展的类并实现接口，这个接口要定义被扩展的类的全部方法，而且实现类要进行重写，重写过程中要调用父类。</p><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2><p>观察者会被注册到被观察者的容器中，当被观察者状态发生变化后，会调用容器中全部观察者的方法。常用于发布通知，动态监听，桌面交互就这么实现的。</p><p>观察者模式是一种行为设计模式，用于将对象之间的一对多依赖关系解耦。其中，当一个对象发生改变时，会自动通知其所有的观察者对象，使得这些观察者能够做出相应的响应。下面是一个简单的实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.ArrayList;
import java.util.List;

class Subject {//声明被观察者
  private List&lt;Observer&gt; observers = new ArrayList&lt;&gt;();

  public void attach(Observer observer) {
    observers.add(observer);
  }

  public void detach(Observer observer) {
    observers.remove(observer);
  }

  public void notifyObservers(String message) {
    for (Observer observer : observers) {
      observer.update(message);
    }
  }
}

interface Observer {//声明观察者接口
  void update(String message);
}


class ConcreteObserver implements Observer {//实现观察者
  private String name;

  public ConcreteObserver(String name) {
    this.name = name;
  }

  @Override
  public void update(String message) {
    System.out.println(name + &quot; received message: &quot; + message);
  }
}

public class ObserverPatternDemo {
  public static void main(String[] args) {
    Subject subject = new Subject();

    Observer observer1 = new ConcreteObserver(&quot;Observer 1&quot;);
    Observer observer2 = new ConcreteObserver(&quot;Observer 2&quot;);
    Observer observer3 = new ConcreteObserver(&quot;Observer 3&quot;);

    subject.attach(observer1);
    subject.attach(observer2);
    subject.attach(observer3);

    subject.notifyObservers(&quot;Hello, World!&quot;);

    subject.detach(observer2);

    subject.notifyObservers(&quot;Goodbye, World!&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><p>**意图：**定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。</p><p>**主要解决：**在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。</p><p>**何时使用：**一个系统有许多许多类，而区分它们的只是他们直接的行为。</p><p>**如何解决：**将这些算法封装成一个一个的类，任意地替换。</p><p>**关键代码：**实现同一个接口。</p><h2 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h2><p>堆排序的建堆过程是自底向上的过程，核心思想就是分治，子树最优扩展到全局最优。</p><p>如果采用自顶向下的建堆方法，那么根节点需要反复下坠，而且也不一定能把全局最优最大的节点送上来。</p><p>建堆的时间复杂度是O(n)</p><p>堆排序的时间复杂度是O(nlogn)</p><h2 id="排序的稳定性" tabindex="-1"><a class="header-anchor" href="#排序的稳定性" aria-hidden="true">#</a> 排序的稳定性</h2><p>直接插入、冒泡、归并、桶排、计数是稳定的</p><p>折半插入、希儿、快排、选择、堆排</p>`,23),a=[d];function v(l,c){return i(),n("div",null,a)}const t=e(r,[["render",v],["__file","杂项.html.vue"]]);export{t as default};
