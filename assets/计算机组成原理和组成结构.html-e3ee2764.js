import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,e as h}from"./app-ae435857.js";const r={},t=h('<h2 id="数据的表示" tabindex="-1"><a class="header-anchor" href="#数据的表示" aria-hidden="true">#</a> 数据的表示</h2><h3 id="原、反、补、移" tabindex="-1"><a class="header-anchor" href="#原、反、补、移" aria-hidden="true">#</a> 原、反、补、移</h3><ul><li><p>正数的原码、反码、补码、移码相同</p></li><li><p>负数的反码是原码的非符号位全取反，补码是原码的非符号位全取反再+1，移码是补码的符号位取反</p></li></ul><p>​ 补码常通过扫码法获取，方法是从右往左找出原码的第一个1，这个1保持不变，其他非符号 位取反。另外，补码的补码就是原码。</p><ul><li><p>n个位时数值的表示范围</p><p>原码和反码是一致的，因为有+0和-0的区分。</p><p>在补码中，+0和-0的补码都是全0，既然补码0能表示+0和-0，那么就代表着有一个补码是多出来的，于是补码则将1000当做最小的数，这是规定，所以在负数段会有2^(n-1)个数。</p></li></ul><h3 id="浮点数" tabindex="-1"><a class="header-anchor" href="#浮点数" aria-hidden="true">#</a> 浮点数</h3><p>计算过程是对阶、尾数计算、规格化</p><h2 id="计算机结构" tabindex="-1"><a class="header-anchor" href="#计算机结构" aria-hidden="true">#</a> 计算机结构</h2><ul><li>运算器：算数逻辑单元ALU、累加寄存器AC、数据缓冲寄存器DR、状态条件寄存器PSW</li><li>控制器：程序计数器PC、指令寄存器IR、指令译码器、时序部件</li></ul><h2 id="flynn分类法" tabindex="-1"><a class="header-anchor" href="#flynn分类法" aria-hidden="true">#</a> Flynn分类法</h2><p>Flynn分类法是计算机结构的分类方法，指标是指令流和数据流数量。</p><p>单指令单数据流SISD，一条指令由一个CPU处理，单CPU计算机</p><p>单指令多数据流SIMD，一条指令由多个CPU处理，多CPU计算机</p><p>多指令单数据流MISD，多条指令由一个CPU处理，没意义或者指流水线技术</p><p>多指令多数据流MIMD，多条指令由多个CPU处理，多计算机集群</p><h2 id="cisc与risc" tabindex="-1"><a class="header-anchor" href="#cisc与risc" aria-hidden="true">#</a> CISC与RISC</h2><table><thead><tr><th>指令系统类型</th><th>指令特征</th><th>实现方式</th><th>其他</th></tr></thead><tbody><tr><td>CISC</td><td>数量多，使用频率差距大，可变长</td><td>微程序控制技术，软件方法</td><td>研制周期长</td></tr><tr><td>RISC</td><td>数量少，使用频率接近，定长，大部分是单周期指令，只有load和store指令能操作内存</td><td>增加通用寄存器，硬布线逻辑控制为主，硬件方法，效率高，适合采用流水线</td><td>优化编译，有效支持高级语言</td></tr></tbody></table><h2 id="流水线技术" tabindex="-1"><a class="header-anchor" href="#流水线技术" aria-hidden="true">#</a> 流水线技术</h2><p>一条指令的顺序是取值、分析、执行，流水线技术的原理就是利用三个步骤使用不同部件进行的特征，将三个步骤重叠，高效利用各个步骤使用到的部件。</p><p>就好比一台汽车，要装发动机，要装车门，但是装发动机时候装车门的工人是空闲的，流水线技术能让全部工人都忙活起来。</p><h2 id="储存系统" tabindex="-1"><a class="header-anchor" href="#储存系统" aria-hidden="true">#</a> 储存系统</h2><h2 id="总线系统" tabindex="-1"><a class="header-anchor" href="#总线系统" aria-hidden="true">#</a> 总线系统</h2><h2 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性" aria-hidden="true">#</a> 可靠性</h2><h2 id="校验码" tabindex="-1"><a class="header-anchor" href="#校验码" aria-hidden="true">#</a> 校验码</h2><h3 id="crc" tabindex="-1"><a class="header-anchor" href="#crc" aria-hidden="true">#</a> CRC</h3><h3 id="海明" tabindex="-1"><a class="header-anchor" href="#海明" aria-hidden="true">#</a> 海明</h3>',26),i=[t];function n(c,l){return e(),d("div",null,i)}const p=a(r,[["render",n],["__file","计算机组成原理和组成结构.html.vue"]]);export{p as default};
