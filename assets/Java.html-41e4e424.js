import{_ as e,o as i,c as n,a as s}from"./app-09c9e424.js";const a={},d=s(`<h2 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式" aria-hidden="true">#</a> lambda表达式</h2><p>Lambda 表达式的使用前提:</p><ul><li>必须有接口（不能是抽象类），接口中有且仅有一个需要被重写的抽象方法。</li><li>必须支持上下文推导，要能够推导出来 Lambda 表达式表示的是哪个接口中的内容，也就是说将lambda表达式赋值或传递给接口类型的参数时，需要能唯一确认重写的接口的抽象方法。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LambdaTest {
    final static String hello = &quot;Hello, &quot;;
    private static String goodbye = &quot;Goodbye, &quot;;
    
    public static void main(String[] args) {
    
    	//被实现的抽象接口
    	interface GreetingMessage {
        	void sayMessage(String message);
    	}
    
    
    	//第一个lambda
        GreetingMessage message1 = (String message) -&gt;
        System.out.println(hello + message);
        
        //第一个的匿名内部类全写
        GreetingMessage message1 = new GreetingMessage(){
        	@Override
        	void sayMessage(String message){
        		System.out.println(hello + message);
        	}
        }
        
        
        //第二个lambda
        GreetingMessage message2 = (message) -&gt;
        {
            //goodbye = &quot;the time is late, I&#39;d go now, goodbye&quot;;
            goodbye += &quot;the time is late, I&#39;d go now, &quot;;
            System.out.println(goodbye + message);
        };
        
        message1.sayMessage(&quot;张三&quot;);
        message2.sayMessage(&quot;李四&quot;);
    }
    

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stream类" tabindex="-1"><a class="header-anchor" href="#stream类" aria-hidden="true">#</a> stream类</h2>`,5),l=[d];function t(v,r){return i(),n("div",null,l)}const c=e(a,[["render",t],["__file","Java.html.vue"]]);export{c as default};
