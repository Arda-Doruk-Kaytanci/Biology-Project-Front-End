import React from "react";
import "../Css Files/Resources.css"
import axioslogo from "../Images/axios.png"
import reactlogo from "../Images/react.png"
import csslogo from "../Images/css.png"
import jslogo from "../Images/javascript.png"
import chartjslogo from "../Images/chartjs.png"
import chatgptlogo from "../Images/chatgpt.png"
import htmllogo from "../Images/html5.png"
import image1 from "../Images/image1.png"
import image2 from "../Images/image2.png"
import image3 from "../Images/image3.png"
import image4 from "../Images/image4.png"

function Resources() {
    return (
        <div className="resources-page-container">
            <section className="inspiration">
                <h1>İlhamımız</h1>
                <p>
                    Bu projeye başlarken ilhamımızı, ekolojik analizlerde kullanılan PC-ORD yazılımının varlığını keşfederek aldık. PC-ORD’un sunduğu sistematik yaklaşım ve ekolojik verilerin analizine dair sağladığı perspektif, bize doğayı daha iyi anlamak ve teknolojik sistemlerle entegre çözümler üretme fikrini aşıladı.

                    Amacımız, ekosistem dinamiklerini anlamak ve bu dinamikleri optimize ederek sürdürülebilir sistemler geliştirmekti. Bu doğrultuda, doğanın sunduğu verileri kullanarak enerji üretimi, atık yönetimi ve kaynak döngülerini analiz etmeye odaklandık. Projemizin sonuna yaklaştığımız şu günlerde, hedefimize adım adım ilerlemenin mutluluğunu yaşıyoruz.

                    Bu süreçte, doğa ve sistem tasarımı arasındaki uyumun ne kadar önemli olduğunu bir kez daha anladık. PC-ORD kullanmasak da, bize sağladığı ilham sayesinde kendi yöntemlerimizi geliştirdik ve ekolojik sistemlerin sürdürülebilirliğini destekleyecek bir çözüm ortaya koymayı başardık.
                </p>
            </section>

            <section className="used-tools-display">
                <h1>Kullandığımız Araçlar</h1>
                <div className="used-tools-container right">
                    <img src={htmllogo} alt="" className="highlight-img"></img >
                    <p>HTML (HyperText Markup Language), web sayfalarının oluşturulması ve düzenlenmesi için kullanılan temel işaretleme dilidir.
                        1991 yılında Tim Berners-Lee tarafından geliştirilen HTML, internetin temel yapı taşını oluşturur ve bir web tarayıcısının
                        sayfadaki içeriği nasıl görüntüleyeceğini belirler. HTML, kullanıcıya metin, görsel, bağlantı, video ve ses gibi öğelerin
                        düzenlenmesini sağlar. Web sitelerinde gördüğümüz her yapı, HTML ile şekillendirilmiş ve düzenlenmiştir. HTML, içerikleri
                        sınıflandırmak için etiketler kullanır ve bu etiketler genellikle bir açılış ve bir kapanış etiketi olmak üzere çift olarak
                        kullanılır. HTML bir web sayfasının iskeletini oluşturur. Her HTML belgesi &lt;!DOCTYPE html&gt; deklarasyonu ile başlar ve
                        ardından gelen &lt;html&gt; etiketi, belgenin tamamını kapsar. Sayfa içeriğini tanımlayan başlıca etiketler &lt;head&gt; ve
                        &lt;body&gt; etiketleridir. Örneğin, bir başlık eklemek için &lt;h1&gt; etiketi kullanılırken, bir paragraf oluşturmak için
                        &lt;p&gt; etiketi kullanılır. Bağlantılar &lt;a&gt; etiketi ile eklenir, resimler ise &lt;img&gt; etiketi ile sayfaya dahil edilir.
                        HTML, çok katmanlı bir yapı oluşturmak için &lt;div&gt; ve &lt;span&gt; gibi blok ve satır içi öğeleri de destekler. Günümüzde
                        HTML5, HTML'in en güncel sürümüdür ve internet dünyasında büyük bir dönüşüm sağlamıştır. HTML5, ses, video, animasyon ve
                        kullanıcı etkileşimlerini doğrudan destekleyerek modern web geliştirme süreçlerini hızlandırmıştır. Ek olarak, semantik
                        etiketlerin (örneğin &lt;section&gt;, &lt;article&gt; ve &lt;footer&gt;) eklenmesi, sayfa yapısını daha anlamlı hale getirmiştir
                        ve arama motorlarının içerikleri daha kolay anlamasına yardımcı olmuştur. HTML, web geliştirme sürecinde temel yapı taşını
                        oluşturur ve genellikle CSS (Cascading Style Sheets) ve JavaScript gibi diğer teknolojilerle birlikte kullanılır. CSS, HTML
                        ile oluşturulan içeriğin görünümünü ve düzenini sağlarken, JavaScript sayfaya dinamiklik ve interaktif özellikler kazandırır.
                        HTML öğrenmek, web geliştirme yolculuğuna adım atan herkes için zorunlu bir adımdır ve modern teknolojilerle entegre çalışarak
                        güçlü ve etkileyici web sayfalarının oluşturulmasını sağlar.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={csslogo} alt="" className="highlight-img"></img >
                    <p>CSS (Cascading Style Sheets), web sayfalarının görünümünü ve düzenini sağlayan bir stil dilidir. 1996 yılında W3C (World Wide Web Consortium) tarafından geliştirilen CSS, HTML ile yapılandırılmış web sayfalarının görsel özelliklerini düzenlemek için kullanılır. CSS sayesinde bir web sayfasındaki metinlerin rengi, boyutu, yazı tipi, arka planı ve sayfadaki öğelerin konumu gibi pek çok özellik kontrol edilebilir. CSS, web geliştirme sürecinde HTML'e görsel bir boyut kazandırarak, kullanıcıların daha estetik ve düzenli bir deneyim yaşamasını sağlar.

                        CSS kullanımı, web sayfalarının daha hızlı yüklenmesine ve düzenli kodlama yapılmasına olanak tanır. HTML, bir sayfanın iskeletini oluştururken, CSS bu iskelete görsel anlamda şekil verir. Örneğin, metinleri renklendirmek, öğeler arasındaki boşlukları ayarlamak, sayfa arka planına renk veya görsel eklemek CSS ile yapılır. Ayrıca CSS, aynı stil tanımlarını birden fazla HTML sayfasında kullanarak tasarımların tutarlı olmasını sağlar.

                        CSS, inline CSS, internal CSS ve external CSS olmak üzere üç farklı yöntemle kullanılır. Inline CSS, HTML etiketlerinin içine doğrudan stil eklemek için kullanılır ancak büyük projelerde kod karmaşasına yol açabilir. Internal CSS, sayfanın &gt;head&gt; bölümünde tanımlanır ve sadece o sayfada geçerlidir. External CSS ise ayrı bir dosyada tanımlanır ve birden fazla HTML sayfasına bağlanarak daha düzenli ve etkili bir stil yönetimi sağlar.

                        CSS, web tasarımında sayfa düzenini oluşturmak ve farklı ekran boyutlarına uygun tasarımlar yapmak için güçlü araçlar sunar. Responsive tasarım, CSS'in en önemli özelliklerinden biridir ve mobil cihazlar, tabletler ve masaüstü bilgisayarlar gibi farklı cihazlara uyum sağlayan sayfalar oluşturmayı sağlar. Bu sayede kullanıcı deneyimi her platformda optimize edilir.

                        CSS'nin gelişimi ile birlikte, modern web tasarımında birçok yeni özellik ve teknik ortaya çıkmıştır. Günümüzde kullanılan CSS3, animasyonlar, geçişler (transitions), gölgeler ve 3D efektler gibi gelişmiş görsel özellikler sunar. CSS, web sayfalarının sadece statik görünmesini önler ve etkileşimli, dinamik bir yapı kazandırır.

                        Sonuç olarak, CSS web sayfalarının estetik ve kullanıcı dostu olmasını sağlayan temel bir teknolojidir. HTML ile birlikte çalışarak web geliştirme dünyasında önemli bir yer tutar ve modern web tasarımının vazgeçilmez bir parçasıdır. CSS öğrenmek, güçlü ve etkileyici web siteleri oluşturmanın anahtarıdır.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={jslogo} alt="" className="highlight-img"></img >
                    <p>JavaScript, web sayfalarını dinamik ve etkileşimli hale getiren bir programlama dilidir. 1995 yılında Brendan Eich tarafından geliştirilen JavaScript, başlangıçta yalnızca tarayıcılar üzerinde çalışmak için tasarlanmış olsa da günümüzde hem tarayıcı tarafında hem de sunucu tarafında çalışabilen güçlü ve çok yönlü bir dil haline gelmiştir. HTML ve CSS ile birlikte JavaScript, modern web geliştirme süreçlerinin temel taşlarından biridir.

                        JavaScript’in temel amacı, statik web sayfalarına dinamiklik kazandırmaktır. HTML ile yapılandırılan ve CSS ile görsel düzenlemesi yapılan bir web sayfası, JavaScript sayesinde kullanıcı etkileşimine açık ve işlevsel hale gelir. Örneğin, bir butona tıklandığında sayfanın belirli bir kısmının güncellenmesi, bir formun doldurulması sırasında girilen verilerin kontrol edilmesi veya animasyonların oynatılması gibi işlemler JavaScript ile yapılır.

                        JavaScript, tarayıcı tarafında çalışması sayesinde hızlı bir performans sağlar. Kullanıcı tarayıcısı üzerinde çalıştığı için sunucuya sürekli istek göndermeden işlemleri doğrudan gerçekleştirebilir. Bu özellik, kullanıcı deneyimini önemli ölçüde iyileştirir. Günümüzde Node.js gibi teknolojiler sayesinde JavaScript, tarayıcı dışında sunucu tarafında da kullanılmakta ve bu sayede tam kapsamlı uygulamalar geliştirmek mümkün hale gelmiştir.

                        JavaScript, web sayfalarının yapısında bulunan DOM (Document Object Model) üzerinden sayfadaki öğelere erişim sağlar ve bu öğeleri dinamik olarak değiştirebilir. Örneğin, bir metnin içeriğini güncellemek, bir görselin görünürlüğünü değiştirmek veya sayfada yeni HTML öğeleri eklemek gibi işlemler, JavaScript kullanılarak yapılabilir. Bunun yanı sıra JavaScript, internet üzerinden veri alışverişini de mümkün kılar. Modern tarayıcıların sunduğu fetch API veya XMLHttpRequest gibi araçlarla sunucudan veri çekmek ya da sunucuya veri göndermek oldukça kolaydır.

                        JavaScript’in yetenekleri, yalnızca web sayfalarıyla sınırlı kalmaz. Günümüzde oyun geliştirme, grafik işleme ve mobil uygulama geliştirme gibi alanlarda da yaygın olarak kullanılmaktadır. HTML5 ile birlikte gelen Canvas API, tarayıcı üzerinde grafiksel içerikler oluşturmayı mümkün kılar ve bu sayede JavaScript ile basit oyunlar ve animasyonlar geliştirilebilir. Ayrıca, JavaScript tabanlı birçok modern kütüphane ve çerçeve, geliştiricilere daha hızlı ve verimli kod yazma imkanı sunar.

                        Sonuç olarak, JavaScript günümüzde modern web geliştirme süreçlerinin en önemli bileşenlerinden biridir. Web sitelerini sadece görüntülenebilir içerikler olmaktan çıkarıp dinamik, etkileşimli ve kullanıcı dostu uygulamalar haline getirir. Tarayıcı tarafında çalışmasının yanı sıra sunucu tarafında da kullanılabilir olması, JavaScript’i hem frontend hem de backend geliştirme için vazgeçilmez bir araç haline getirmiştir.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={reactlogo} alt="" className="highlight-img"></img >
                    <p>React, kullanıcı arayüzleri oluşturmak için geliştirilmiş açık kaynaklı bir JavaScript kütüphanesidir. 2013 yılında Facebook tarafından geliştirilen React, özellikle tek sayfa uygulamaları (Single Page Applications - SPA) geliştirme amacıyla kullanılmaktadır. React, geleneksel web geliştirme yöntemlerine kıyasla daha hızlı ve daha etkili çözümler sunarak geliştiricilerin modern, dinamik ve performanslı uygulamalar geliştirmesine olanak tanır.

                        React’in temelinde bileşen tabanlı mimari yer alır. Bir web sayfasını küçük, bağımsız ve yeniden kullanılabilir bileşenlere bölerek yönetimi kolaylaştırır. Her bir bileşen, kendi HTML yapısını, CSS stilini ve JavaScript işlevselliğini içerebilir. Örneğin, bir buton, bir başlık veya bir form, ayrı bir React bileşeni olarak tanımlanabilir ve farklı sayfalarda tekrar tekrar kullanılabilir. Bu sayede uygulamanın kod yapısı modüler ve daha okunabilir hale gelir.

                        React’in sunduğu en önemli özelliklerden biri de Virtual DOM yapısıdır. Virtual DOM, tarayıcının geleneksel DOM yapısını sanal bir kopya üzerinde tutarak değişiklikleri hızlı bir şekilde algılar ve yalnızca gerekli bölümleri günceller. Bu süreç sayesinde sayfanın tamamı yeniden yüklenmez, yalnızca değişen bileşenler güncellenir ve performans büyük ölçüde artar.

                        React, sadece kullanıcı arayüzlerini oluşturmakla kalmaz, aynı zamanda verilerin kullanıcı arayüzünde dinamik olarak nasıl güncelleneceğini de kolaylaştırır. State ve props adı verilen yapılar, bileşenler arasında veri akışını sağlar. State, bir bileşenin içindeki veriyi tutarken, props ise bir bileşenden diğerine veri aktarmak için kullanılır. Bu yapı sayesinde veri yönetimi esnek ve düzenli bir şekilde sağlanır.

                        React’in modern web geliştirmedeki popülerliği, onun ekosistemindeki güçlü araçlardan da kaynaklanmaktadır. React Router, sayfalar arasında gezinmeyi sağlayarak SPA mantığını destekler. Redux ve Context API gibi araçlar, uygulamalardaki global state yönetimini kolaylaştırır. Ayrıca, Hooks yapısı ile bileşenlerin işlevselliği artırılmıştır ve React geliştiricilere sınıf tabanlı bileşenler yerine daha sade ve okunabilir fonksiyon tabanlı bileşenler yazma imkanı sunmuştur.

                        React’in geliştiricilere sunduğu esneklik, yalnızca tarayıcı üzerinde çalışan uygulamalarla sınırlı değildir. React Native sayesinde aynı JavaScript kod tabanı kullanılarak iOS ve Android platformları için mobil uygulamalar geliştirilebilir. Bu durum, geliştiricilere hem zaman hem de maliyet açısından büyük avantaj sağlar.

                        Sonuç olarak, React, modern web geliştirme dünyasında kullanıcı arayüzlerini hızlı, modüler ve performanslı bir şekilde oluşturmak için vazgeçilmez bir araçtır. Bileşen tabanlı yapısı, Virtual DOM performansı ve zengin ekosistemi ile geliştiricilere güçlü ve esnek çözümler sunar. React, günümüzde dünya çapında büyük şirketler tarafından kullanılmakta ve popülaritesini her geçen gün artırmaktadır. Web ve mobil uygulama geliştirme süreçlerini birleştiren bu güçlü kütüphane, geliştiriciler için öğrenmesi kolay ve kullanımı keyifli bir teknoloji haline gelmiştir.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={axioslogo} alt="" className="highlight-img"></img >
                    <p>Axios, web uygulamalarında HTTP isteklerini gerçekleştirmek için kullanılan popüler bir JavaScript kütüphanesidir. Tarayıcı tarafında çalışmanın yanı sıra, Node.js ile sunucu tarafında da kullanılabilir. Axios, özellikle RESTful API’ler ile iletişim kurmak, veri alışverişi yapmak ve uygulamalar içinde dinamik içerik sağlamak için geliştirilmiştir.

                        Axios, JavaScript’in yerleşik fetch() API’sine kıyasla daha fazla kolaylık ve özellik sunar. Örneğin, isteklere otomatik olarak başlık (header) eklemek, hata yönetimini daha kolay hale getirmek, veri formatlarını otomatik dönüştürmek gibi ek işlevler sağlar. Bu özellikler, geliştiricilere daha az kod yazarak daha düzenli ve okunabilir bir yapı oluşturma avantajı sunar.

                        Axios, asenkron çalışır ve böylece web sayfalarının daha hızlı ve akıcı bir kullanıcı deneyimi sunmasını sağlar. Kullanıcı, sayfanın geri kalan bölümlerini kullanmaya devam ederken Axios, arka planda veriyi çekebilir veya sunucuya veri gönderebilir. Bu süreçte veriler JSON formatında işlenir, bu da modern web geliştirme süreçlerinde oldukça yaygın bir standarttır.

                        Axios’un temel özellikleri şunlardır:
                        Axios, HTTP isteklerinin oluşturulmasını, yönetilmesini ve sonuçların işlenmesini kolaylaştıran bir kütüphanedir. Tarayıcı tarafında çalışmasının yanı sıra sunucu tarafında da Node.js ile sorunsuz bir şekilde kullanılabilir. Web geliştiricileri için hem performanslı hem de kullanımı kolay bir araç sunan Axios, RESTful API’ler ile çalışmayı oldukça basit hale getirir.

                        Axios ile GET, POST, PUT ve DELETE gibi HTTP metotlarını kullanarak sunucuya istek gönderilebilir. Bir uygulamada kullanıcı verilerini çekmek için GET isteği yapılabilirken, yeni bir veriyi sunucuya kaydetmek için POST isteği kullanılır. Axios, bu işlemleri basitleştirir ve kodun okunabilirliğini artırır. Ayrıca isteklere header bilgileri eklemek, timeout süreleri belirlemek ve verileri otomatik olarak dönüştürmek gibi önemli özelliklere sahiptir.

                        Axios’un en büyük avantajlarından biri de hata yönetimi konusunda sunduğu kolaylıktır. Sunucudan dönen hatalı yanıtlar otomatik olarak yakalanır ve geliştiriciye daha anlamlı hata mesajları sağlar. Örneğin, bir isteğin zaman aşımına uğraması veya sunucudan 404 gibi bir hata kodunun dönmesi durumunda Axios, bu hatayı otomatik olarak işleyip geliştiriciye bilgi sağlar.

                        Ayrıca Axios, interceptor adı verilen yapı ile istekler ve yanıtlar üzerinde işlem yapma imkanı tanır. Bu özellik, tüm isteklerde kullanılacak bir yapı eklemek (örneğin yetkilendirme token’ı) veya gelen yanıtları toplu halde düzenlemek gibi işlemler için oldukça faydalıdır.

                        Axios’un modern JavaScript kütüphaneleriyle uyumluluğu da oldukça güçlüdür. Özellikle React, Vue.js ve Angular gibi popüler kütüphaneler ile birlikte kullanılır. React uygulamalarında, Axios ile API istekleri yaparak state (durum) güncellemeleri sağlanır ve kullanıcıya anlık olarak veri sunulur.

                        Sonuç olarak, Axios, HTTP istekleri için basit, güçlü ve esnek bir çözüm sunar. Veri alışverişi süreçlerini hızlandırır ve modern web geliştirme projelerinde sıklıkla tercih edilir. Hata yönetimi, otomatik veri dönüştürme ve geniş yapılandırma seçenekleri sayesinde, API bağlantılarını yönetmek ve verileri işlemek için en uygun araçlardan biridir. Hem frontend hem de backend geliştiriciler için öğrenmesi kolay ve kullanımı etkili bir araçtır.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={chartjslogo} alt="" className="highlight-img"></img >
                    <p>Chart.js, veri görselleştirme amacıyla kullanılan açık kaynaklı bir JavaScript kütüphanesidir. HTML5’in Canvas API'sini kullanarak çalışır ve web uygulamalarında dinamik, etkileşimli grafikler oluşturmayı sağlar. Grafikler, verilerin daha kolay anlaşılmasını sağlarken kullanıcıların görsel olarak daha etkili bir deneyim yaşamasına olanak tanır. Chart.js, basit yapısı ve kullanımı kolay arayüzü sayesinde, web geliştiricileri için popüler bir tercih haline gelmiştir.

                        Chart.js, çeşitli grafik türlerini destekler ve bu grafikler uygulamanın ihtiyacına göre özelleştirilebilir. Kullanıcılar zaman içindeki değişimleri göstermek için çizgi grafikleri, karşılaştırmalı veriler için çubuk grafikleri, oranları analiz etmek için pasta ve halka grafikleri gibi görselleştirme araçlarını kullanabilir. Ayrıca radar grafikleri, karma grafikler ve dağılım grafikleri gibi daha karmaşık veri görselleştirme yöntemlerini de destekler. Bu çeşitlilik, Chart.js’i hem basit projeler hem de kapsamlı analiz uygulamaları için uygun bir hale getirir.

                        Chart.js, modern web geliştirme teknolojileriyle sorunsuz bir şekilde çalışır. Grafikler, veri girişlerine göre dinamik olarak güncellenebilir ve kullanıcı etkileşimlerine yanıt verebilir. Örneğin, bir veritabanından çekilen verilerle anlık grafik güncellemeleri yapılabilir veya kullanıcının bir butona tıklamasıyla farklı veri kümeleri görselleştirilebilir. Grafikler tarayıcı üzerinde hızlı bir şekilde render edilerek performans kaybını en aza indirir.

                        Kütüphane, geliştiricilere geniş özelleştirme seçenekleri sunar. Grafiklerin boyutları, renkleri, kenarlıkları, yazı tipleri ve etkileşim özellikleri kolaylıkla düzenlenebilir. Ayrıca, eksen değerleri, başlıklar ve açıklama kutuları gibi detaylar eklenerek grafiklerin daha anlamlı hale getirilmesi sağlanır. Chart.js, esnek yapılandırma seçenekleri sayesinde projeye özel ihtiyaçlara cevap verir ve geliştiricilerin verilerini en uygun şekilde görselleştirmesine yardımcı olur.

                        Chart.js, özellikle React, Vue.js ve Angular gibi modern JavaScript kütüphaneleri ve çerçeveleriyle kolayca entegre edilebilir. Bu sayede, tek sayfa uygulamaları (SPA) ve dashboard projelerinde veri görselleştirme süreçleri büyük ölçüde hızlanır. Web geliştirme projelerinde kullanımı kolay olması, dokümantasyonunun güçlü olması ve topluluk desteğinin genişliği, Chart.js’in tercih edilmesini sağlayan önemli faktörlerdir.

                        Sonuç olarak, Chart.js, veri görselleştirme ihtiyacı olan her projede güvenle kullanılabilecek güçlü ve esnek bir kütüphanedir. Geliştiricilere verilerini etkili, anlaşılır ve estetik bir şekilde sunma imkanı tanır. Özelleştirilebilir yapısı, performans avantajı ve geniş grafik türleri sayesinde, hem küçük çaplı web projelerinde hem de büyük ölçekli analiz uygulamalarında önemli bir rol oynar.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={chatgptlogo} alt="" className="highlight-img"></img >
                    <p>ChatGPT, OpenAI tarafından geliştirilen yapay zeka tabanlı bir dil modelidir ve GPT (Generative Pre-trained Transformer) mimarisine dayanır. Gelişmiş doğal dil işleme (NLP) teknikleri kullanan ChatGPT, metin tabanlı girdilere anlamlı, tutarlı ve doğal yanıtlar üretebilir. Kullanıcıların sorularını yanıtlayabilir, metinler oluşturabilir, çeviriler yapabilir ve hatta karmaşık konularda açıklamalar sunabilir.

                        ChatGPT’nin temelinde, büyük miktarda metin verisi üzerinde eğitilmiş derin öğrenme modelleri yer alır. Bu modeller, insan dilinin yapısını ve mantığını anlamak için devasa veri kümelerinden öğrenir. ChatGPT, cümleler arasındaki ilişkileri analiz ederek tutarlı ve akıcı metinler üretir. GPT-4 gibi son sürümler, önceki nesillerden daha güçlüdür ve daha karmaşık bağlamları anlayarak daha doğru yanıtlar verebilir.

                        ChatGPT, geniş bir kullanım alanına sahiptir. Eğitimden yazılım geliştirmeye, içerik üretiminden müşteri hizmetlerine kadar birçok alanda kullanıcıların hayatını kolaylaştırır. Özellikle, programlama alanında geliştiricilere kod yazma, hata ayıklama ve algoritma tasarlama gibi konularda büyük yardımcıdır. Örneğin, bir geliştirici ChatGPT’ye bir sorun tanımı verir ve model bu sorunun çözümü için örnek kodlar sunabilir.

                        Bunun dışında, ChatGPT’nin sağladığı faydalardan biri de içerik üretiminde kullanılmasıdır. Blog yazıları, makaleler, hikayeler ve sosyal medya gönderileri gibi metinler kısa sürede üretilebilir. Ayrıca dil öğrenen kişiler için çeviri yapma, dilbilgisi hatalarını düzeltme ve cümle yapısını iyileştirme gibi alanlarda da etkili bir araçtır.

                        ChatGPT’nin bir diğer önemli yeteneği, sohbet tabanlı uygulamalarda kullanılmasıdır. Chatbotlar aracılığıyla müşteri destek hizmetlerinde kullanılarak kullanıcıların sorularına anında yanıt verilebilir ve insan gücüne olan ihtiyacı azaltabilir. Özellikle, e-ticaret, bankacılık ve teknoloji sektörlerinde ChatGPT gibi modeller müşteri memnuniyetini artırmaya yönelik büyük avantajlar sağlar.

                        Gelişmiş bir yapay zeka modeli olan ChatGPT, yaratıcı düşünceyi destekleyerek beyin fırtınası yapma, yeni fikirler üretme ve karmaşık problemlere çözüm arama süreçlerinde de kullanılabilir. Araştırmacılar, mühendisler ve öğrenciler, projelerinde karşılaştıkları zorlukları ChatGPT’nin sunduğu önerilerle aşabilirler. Ayrıca yapay zeka teknolojilerinin ilerlemesiyle birlikte ChatGPT, daha güvenilir ve verimli sonuçlar üretir.

                        Sonuç olarak, ChatGPT, insan dilini anlayarak ve yorumlayarak kullanıcılara etkili ve hızlı çözümler sunan çok yönlü bir yapay zeka aracıdır. Bilgiye hızlı erişim, verimlilik artışı ve yaratıcı üretim süreçlerini destekleyerek eğitimden iş dünyasına kadar birçok alanda önemli bir rol oynar. Gelişmiş dil modeli yetenekleriyle gelecekte daha fazla alanda kullanılmaya devam edecek ve dijital dönüşümün önemli bir parçası olmaya devam edecektir.</p>
                </div>
            </section>

            <section className="highlights-container">
                <h1>Öne Çıkanlar</h1>
                <div className="inner-highlist-container">
                    <figure className="highlight-figure">
                        <img src={image4} alt="" className="highlight-img"></img >
                        <figcaption></figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={image1} alt="" className="highlight-img"></img >
                        <figcaption></figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={image2} alt="" className="highlight-img"></img >
                        <figcaption></figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={image3} alt="" className="highlight-img"></img >
                        <figcaption></figcaption>
                    </figure>         
                </div>
            </section>
            <section className="links-to-used-tools-container">
                <h1>Linkler</h1>
                <ul>
                    <li className="anchor-li"><a className="link-anchor" href="https://react.dev">https://react.dev</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://reactrouter.com">https://reactrouter.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://www.chartjs.org">https://www.chartjs.org</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://chatgpt.com">https://chatgpt.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://unsplash.com">https://unsplash.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://axios-http.com">https://axios-http.com</a></li>
                    <li className="anchor-li"   ><a className="link-anchor" href="https://cssgridgenerator.io">https://cssgridgenerator.io</a></li>
                    <li className="anchor-li"   ><a className="link-anchor" href="https://ucanr.edu">https://ucanr.edu</a></li>
                    <li className="anchor-li"   ><a className="link-anchor" href="https://www.fao.org">https://www.fao.org</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Resources