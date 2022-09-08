import React from "react";
import { Button, Modal, Table } from "react-bootstrap";

const AgreementModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mesafeli Satın Alma Sözleşmesi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>TARAFLAR</h4>
        <p>Bu sözleşme,</p>
        <Table striped bordered>
        <thead>
          <tr>
            <th>-</th>
            <th>SATICI</th>
            <th>ALICI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ÜNVAN</td>
            <td>KUVARS TİCARET</td>
            <td>---</td>
          </tr>
          <tr>
            <td>TC NO VERGİ NO:</td>
            <td></td>
            <td>----</td>
          </tr>
          <tr>
            <td>ADRES</td>
            <td>Necip Fazıl Mah. Yozgat Cad. No:33 İç Kap.No:2 Sultanbeyli / İstanbul</td>
            <td>---</td>
          </tr>
          <tr>
            <td>TELEFON</td>
            <td>+90 543 171 9431</td>
            <td>---</td>
          </tr>
          <tr>
            <td>E-MAİL</td>
            <td>info@efalcollection.com</td>
            <td>---</td>
          </tr>

          <tr>
            <td></td>
            <td>BUNDAN SONRA SATICI OLARAK ANILACAKTIR</td>
            <td>BUNDAN SONRA ALICI OLARAK ANILACAKTIR </td>
          </tr>
        </tbody>
      </Table>

        <p>arasında aşağıdaki hükümler çerçevesinde yapılmıştır.</p>
        <b>1.SÖZLEŞME KONUSU</b>
        <p>
          1.1. https://www.efalcollection.com (Bundan böyle “Web Sitesi” olarak
          anılacaktır) adresinde yayın yapan SATICI, internet üzerinden faaliyet
          alanı dahilinde ürünlerinin satış ve pazarlaması işlemlerini de
          yürütmektedir. İşbu Sözleşme’nin konusu ALICI`nın SATICI`ya ait Web
          Sitesinden, elektronik ortamda sipariş verdiği aşağıda belirtilen
          ürünlerin ("Ürün/Ürünler") satışı ve teslimi ile ilgili olarak
          tüketici ve SATICI sıfatlarına haiz olan tarafların, 6502 sayılı
          Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair
          Yönetmelik hükümleri gereğince hak ve yükümlülüklerinin saptanmasıdır.
        </p>
        <p>
          1.2.ALICI, SATICI’nın isim, unvan, açık adres, telefon ve diğer erişim
          bilgileri, satışa konu malın temel nitelikleri, vergiler dahil olmak
          üzere satış fiyatı, ödeme şekli, teslimat koşulları ve masrafları vs.
          satışa konu mal ile ilgili tüm ön bilgiler ve “cayma” hakkının
          kullanılması ve bu hakkın nasıl kullanılacağı, şikayet ve itirazlarını
          iletebilecekleri resmi makamlar vs. konusunda açık, anlaşılır ve
          internet ortamına (e-ticaret) uygun şekilde SATICI tarafından
          bilgilendirildiğini, bu ön bilgileri elektronik ortamda teyit ettiğini
          ve sonrasında mal sipariş verdiğini iş bu sözleşme hükümlerince kabul
          ve beyan eder. https://www.efalcollection.com sitesinde yer alan ön
          bilgilendirme, üyelik sözleşmesi, kişisel veriler hakkındaki
          bilgilendirme metni ve ALICI tarafından verilen sipariş üzerine
          düzenlenen fatura iş bu sözleşmenin ayrılmaz parçalarıdır.{" "}
        </p>
        <b>2.SÖZLEŞME KONUSU ÜRÜN/ÖDEME/TESLİMAT BİLGİLERİ</b>
        <p>
          2.1.Elektronik ortamda alınan ürün/ürünlerin cinsi ve türü, miktarı,
          marka/modeli, satış bedeli, ödeme şekli, teslim alacak kişi, teslimat
          adresi, fatura bilgileri, kargo ücreti Web Sitesinde belirtildiği
          gibidir.
        </p>
        <p>
          2.2. Fatura edilecek kişi ile sözleşmeyi yapan kişi aynı olmak
          zorundadır.
        </p>
        <p>
          2.3. İş bu sözleşmede yer alan bilgiler doğru ve eksiksiz olmalıdır.
          ALICI bu bilgilerin doğru olmadığı veya noksan olduğu durumlardan
          doğacak zararları tamamıyla karşılamayı kabul eder ve ayrıca bu
          durumdan oluşabilecek her türlü sonuç ve sorumluluğu ALICI kabul eder.
          SATICI, ALICI’nın vermiş olduğu bilgilerin gerçekliğinden emin olana
          kadar ve gerekli gördüğü durumlarda siparişi durdurma hakkını saklı
          tutar
        </p>
        <p>
          2.4. SATICI siparişte sorun tespit ettiği durumlarda ALICI’nın vermiş
          olduğu telefon, e-posta ve posta adreslerinden ALICI’ya ulaşamadığı
          takdirde, ALICI’ya ulaşana kadar siparişin yürürlüğe koyulmasını
          dondurur ve ALICI’nın bu süre zarfında kendisiyle iletişime geçmesini
          bekler. Bu süre içerisinde ALICI’dan herhangi bir cevap alınamazsa
          veya ALICI, SATICI’ya ulaşmazsa SATICI her iki tarafın da zarar
          görmemesi için siparişi iptal eder.
        </p>
        <b>3.SÖZLEŞME TARİHİ VE MÜCBİR NEDENLER</b>
        <p>
          3.1 Sözleşme tarihi, ALICI tarafından siparişin verildiği tarih olan
          …………………. tarihidir.
        </p>
        <p>
          3.2 Sözleşmenin imzalandığı tarihte mevcut olmayan veya öngörülmeyen,
          tarafların kontrolleri dışında gelişen ve ortaya çıkmasıyla SATICI’nın
          sözleşme ile yüklendikleri borç ve sorumluluklarını kısmen ya da
          tamamen yerine getirmelerini ya da bunları zamanında yerine
          getirmelerini olanaksızlaştıran durumlar, gümrük sırasında ortaya
          çıkabilecek engeller, ülkelerin ihracat sırasındaki politikaları,
          OHAL, mücbir sebep (Doğal afet, savaş, terör, ayaklanma, değişen
          mevzuat hükümleri, el koyma veya grev, lokavt, üretim ve iletişim
          tesislerinde önemli ölçüde arıza vb.) olarak kabul edilecektir.
        </p>
        <p>
          3.3.SATICI mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti,
          ulaşımın kesilmesi gibi olağanüstü durumlar ve/veya teknik sebepler
          vs. nedenler ile mesafeli satış sözleşmesine konu ürünü(leri) süresi
          içinde teslim edemez ise, durumu ALICI'ya 3 (üç) gün içinde
          bildirmekle yükümlüdür. Bu takdirde ALICI siparişin iptal edilmesini,
          mesafeli satış sözleşmesine konu ürünün(lerin) varsa emsali ile
          değiştirilmesini ve/veya teslimat süresinin engelleyici durumun
          ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir.
          ALICI'nın siparişi iptal etmesi halinde ödediği tutar 14 (on dört) gün
          içinde kendisine ödenir.
        </p>
        <p>
          3.4. Mücbir sebep şahsında gerçekleşen taraf, diğer tarafa durumu
          derhal ve yazılı olarak bildirecektir. Mücbir sebebin devamı esnasında
          tarafların edimlerini yerine getirememelerinden dolayı herhangi bir
          sorumlulukları doğmayacaktır. İşbu mücbir sebep durumu 30 (otuz) gün
          süreyle devam ederse, taraflardan her birinin iş bu sözleşmeyi tek
          taraflı olarak fesih hakkı doğmuş olacaktır.
        </p>
        <b>SATICI’NIN HAK VE YÜKÜMLÜLÜKLERİ</b>
        <p>
          4.1. Satıcı işbu mesafeli satış sözleşmesinde kendisine yüklenen
          edimleri mücbir haller dışında eksiksiz yerine getirmeyi kabul ve
          taahhüt eder.{" "}
        </p>
        <p>
          4.2. 18 (on sekiz) yaşından küçük kişiler
          https://www.efalcollection.com alışveriş yapamaz. SATICI, ALICI’nın
          sözleşmede belirttiği yaşının doğru olduğunu esas alacaktır. Ancak
          ALICI’nın yaşını yanlış yazmasından dolayı SATICI’ya hiçbir şekilde
          sorumluluk yüklenemeyecektir.{" "}
        </p>
        <p>
          4.3. Sistem hatalarından meydana gelen fiyat yanlışlıklarından ve buna
          istinaden SATICI internet sitesindeki sistemden, dizayndan veya
          yasadışı yollarla internet sitesine yapılabilecek müdahaleler
          sebebiyle ortaya çıkabilecek tanıtım, fiyat ve diğer tüm hatalarından
          SATICI sorumlu değildir. Sistem hatalarına dayalı olarak ALICI,
          SATICI’dan hak ve/veya alacak iddiasında bulunamaz.
        </p>
        <p>
          4.4. https://www.efalcollection.com' den kredi kartı ile alışveriş
          yapılabilir.{" "}
        </p>
        <p>
          4.5. Siparişlerin işleme alınma zamanı, siparişin verildiği an değil,
          kredi kartı hesabından gerekli tahsilatın yapıldığı andır. Ödemeli
          gönderi ya da posta çeki gibi müşteri hizmetleri ile görüşülmeden
          gerçekleştirilen ödeme yöntemleri kabul edilmez.{" "}
        </p>
        <p>
          4.6. Mesafeli satış sözleşmesine konu ürüne(lere) ilişkin ödemenin
          ALICI tarafından kredi kartı ile yapılması durumunda, ALICI ile kredi
          kartı sahibinin ya da ürünün teslim edileceği kişinin farklı
          olmasından kaynaklanabilecek olan, kredi kartının yetkisiz kişilerce
          haksız ve hukuka aykırı olarak kullanılması da dahil olmak üzere türlü
          hukuki risk, ALICI’ya aittir. ALICI, bahsi geçen durumlarda herhangi
          bir şekilde zarara uğraması halinde SATICI’dan hiçbir talepte
          bulunmayacağını kabul ve taahhüt eder.{" "}
        </p>
        <p>
          4.7. Ürünün tesliminden sonra ALICI'ya ait kredi kartının ALICI'nın
          kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya
          hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans
          kuruluşunun ürün bedelini SATICI'ya ödememesi halinde, ALICI'nın
          kendisine teslim edilmiş olması kaydıyla ürünün 3 gün içinde SATICI'ya
          gönderilmesi zorunludur. Bu takdirde nakliye giderleri ALICI'ya
          aittir.{" "}
        </p>
        <b>5. ALICININ HAK VE YÜKÜMLÜLÜKLERİ</b>
        <p>
          5.1. ALICI, sözleşmede kendisine yüklenen eksiksiz yerine getirmeyi
          kabul ve taahhüt eder. ALICI, sipariş vermekle birlikte sözleşme
          hükümlerini kabul etmiş sayıldığını ve sözleşmede belirtilen ödeme
          şekline uygun ödemeyi yapacağını kabul ve taahhüt eder.
        </p>
        <p>
          5.2. ALICI, https://www.efalcollection.com internet sitesinden
          SATICI’nın isim, unvan, açık adres, telefon ve diğer erişim bilgileri,
          satışa konu malın temel nitelikleri, vergiler dahil olmak üzere satış
          fiyatı, ödeme sekli, teslimat koşulları ve masrafları vs. satışa konu
          mal ile ilgili tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu
          hakkın nasıl kullanılacağı, şikayet ve itirazlarını iletebilecekleri
          resmi makamlar vs. konusunda açık, anlaşılır ve internet ortamına
          uygun şekilde bilgi sahibi olduğunu bu ön bilgileri elektronik ortamda
          teyit ettiğini kabul ve beyan eder.{" "}
        </p>
        <p>
          5.3. Bir önceki maddeye bağlı olarak ALICI, ürün sipariş ve ödeme
          koşullarının, ürün kullanım talimatlarının, olası durumlara karşı
          alınan tedbirlerin ve yapılan uyarıların olduğu
          https://www.efalcollection.com sipariş/ödeme/kullanım prosedürü
          bilgilerini okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli
          teyidi verdiğini beyan eder.
        </p>
        <p>
          5.4. ALICI, aldığı ürünü iade etmek istemesi durumunda ne surette
          olursa olsun ürüne ve ambalajına zarar vermemeyi ve kesinlikle
          kullanmamış olmayı, iade anında fatura aslını ve irsaliyesini iade
          etmeyi kabul ve taahhüt eder.{" "}
        </p>
        <b>ALICININ ÖNCEDEN BİLGİLENDİRİLDİĞİ HUSUSLAR</b>
        <p>
          6.1. ALICI, aşağıdaki hususlarda, bu Sözleşmenin ALICI tarafından
          SATICI’ya ait internet sitesinde kabulü ile kurulmasından ve gerek
          siparişi vermesinden gerekse ödeme yükümlülüğü altına girmesinden önce
          internet sitesinin ilgili sayfaları-kısımlarındaki tüm genel-özel
          açıklamaları görerek ve inceleyerek bilgilendiğini teyiden kabul eder.
        </p>
        <p>6.2.</p>
        <ul>
          <li>
            SATICI'nın unvanı ve iletişim bilgileri ile güncel tanıtıcı
            bilgileri,
          </li>
          <li>
            Ürün/Ürünlerin SATICI’ya ait internet sitesinden alınması
            sırasındaki satış işlemi aşamaları ile yanlış girilen bilgilerin
            düzeltilmesine ilişkin amaca uygun araçlar-yöntemler,
          </li>
          <li>
            SATICI tarafından uygulanan ALICI bilgileri için geçerli gizlilik,
            veri kullanımı-işleme ve ALICI'ya elektronik iletişim kuralları ile
            ALICI'nın bu hususlarda SATICI'ya verdiği izinler, ALICI'nın kanuni
            hakları, SATICI'nın hakları ve tarafların haklarını kullanım
            usulleri,
          </li>
          <li>
            Ürün/Ürünler için SATICI tarafından öngörülen gönderim
            kısıtlamaları,
          </li>
          <li>
            Sözleşme konusu Ürün/Ürünler için SATICI tarafından kabul edilen
            ödeme yöntem-araçları ile Ürün/Ürünler temel özellik-nitelikleri,
            vergiler dahil toplam fiyatı (ilgili masraflar da dahil olmak üzere
            ALICI'nın SATICI'ya ödeyeceği toplam bedel)
          </li>
          <li>
            Ürün/Ürüler'in ALICI'ya teslimine ilişkin usuller ile
            nakliye-teslim-kargo masrafları hakkında bilgiler,
          </li>
          <li>
            Ürünler ile ilgili diğer ödeme/tahsilat ve teslimat bilgileri ile
            Sözleşme'nin ifasına ilişkin bilgiler, bu hususlarda tarafların
            taahhüt-sorumlulukları,
          </li>
          <li>
            ALICI'nın cayma hakkına sahip olmadığı Ürünler ve diğer
            mal-hizmetler,
          </li>
          <li>
            ALICI'nın cayma hakkının olduğu durumlarda bu hakkını kullanma
            şartları, süresi ve usulü ile hakkın süresinde kullanılmaması
            durumunda ALICI'nın cayma hakkını kaybedeceği,
          </li>
          <li>
            Cayma hakkı olan ürünlerde Ürün, cayma süresi içinde kullanım
            talimatlarına, olağan işleyişine veya teknik özelliklerine uygun
            kullanılmamasından ötürü bozulduğu veya bir değişikliğe uğradığı
            takdirde ALICI'nın cayma talebinin kabul edilmeyebileceği ve her
            durumda SATICI'ya karşı sorumlu olacağı, SATICI'nın kabul ettiği
            hallerde söz konusu bozukluğa veya değişime göre uygun bulduğu bir
            tutarı ALICI'ya yapacağı geri ödemeden tenzil (mahsup) ile tahsil
            edebileceği,
          </li>
          <li>
            Cayma hakkının bulunduğu durumlarda Ürünleri SATICI'ya ne şekilde
            iade edebileceği ve ilgili tüm mali hususlar (iade yolları, masrafı
            ve Ürün bedelinin iadesi ve iade sırasında ALICI tarafından
            kazanılmış/kullanılmış ödül puanları, kampanyalı satışlarda bedelsiz
            ürünler, sağlanmış diğer ücretsiz/iskontolu/indirimli imkanlar,
            hediye çeki vb.leriiçin ALICI'ya geri ödemeden yapılabilecek indirim
            ve mahsuplar ile yetmediği hallerde duruma göre ALICI'dan ek
            tahsilatlar dahil),
          </li>
          <li>
            ALICI'nın tüzel kişi olması halinde, ticari ya da mesleki amaçlarla
            satın aldığı Ürünler için (örneğin toplu alımlar herhalükarda bu
            nitelikte sayılır) cayma hakkı başta olmak üzere "tüketici
            haklarını" kullanamayacağı.
          </li>
        </ul>
        <b>7. SİPARİŞ/ÖDEME PROSEDÜRÜ</b>
        <p>7.1. SİPARİŞ:</p>
        <p>
          7.1.1. Alışveriş sepetine eklenen ürünlerin KDV dahil (Taksitli
          işlemlerde toplam taksit tutarları) ALICI tarafından onaylandıktan
          sonra, banka posu üzerinden işleme alınır. Bu nedenle siparişler, sevk
          edilmeden önce müşteriye sipariş onay maili gönderilir. Sipariş Onay
          maili gönderilmeden sevkiyat yapılmaz.{" "}
        </p>
        <p>
          7.1.2. . Süreçteki herhangi bir aksama durumu ya da kredi kartı ile
          ilgili ortaya çıkabilecek problemler ALICI’ya sözleşmede belirttiği
          telefon/faks/e-mail yollarından biri veya birkaçı kullanılmak sureti
          ile bildirilir. Gerekirse ALICI’dan bankası ile görüşmesi istenebilir.{" "}
        </p>
        <p>
          7.1.3. İstisnai olarak haklı bir nedenle sözleşme konusu malın tedarik
          edilemeyeceğinin anlaşılması ve/veya stok problemi ile karşılaşılması
          durumunda ALICI hemen açık ve anlaşılır bir şekilde bilgilendirilip,
          seçimlik haklarından hangisini kullandığı sorulur ve onay vermesi
          durumunda ALICI’ya eşit kalitede ve fiyatta başka bir mal
          gönderilebilir. Ürünün stoklara girmesi ya da teslime engel diğer
          engelin ortadan kalkması beklenebilir ve/veya sipariş iptal edilebilir
          ve ücret iadesi yapılabilir.
        </p>
        <p>
          7.1.4. Sözleşme konusu malın teslim yükümlülüğünün yerine
          getirilmesinin imkânsızlaştığı hâllerde ALICI bu durumdan haberdar
          edilerek ödemiş olduğu toplam bedel ve varsa onu borç altına sokan her
          türlü belge en geç on gün içinde kendisine iade edilerek sözleşme
          iptal edilir. Böyle bir durumda ALICI’nın SATICI’dan ilave herhangi
          bir maddi ve manevi zarar talebi olmayacaktır.
        </p>
        <p>7.2.ÖDEME:</p>
        <p>
          7.2.1. Ürünün tesliminden sonra ALICI’ya ait kredi kartının ALICI’nın
          kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya
          hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans
          kuruluşun ürün bedelini SATICI’ya ödememesi halinde, ALICI’nın
          kendisine teslim edilmiş ürünü 10 gün içinde kendisine teslim edildiği
          şekilde, kullanılmamış olarak SATICI’ya göndermesi zorunludur. Bu tür
          durumlarda nakliye giderleri ALICI’ya aittir.
        </p>
        <p>
          7.2.2. ALICI kredi kartı ile ödeme yapmayı tercih etmiş ise ALICI,
          ilgili faiz oranlarını ve temerrüt faizi ile ilgili bilgileri
          bankasından ayrıca teyit edeceğini, yürürlükte bulunan mevzuat
          hükümleri gereğince faiz ve temerrüt faizi ile ilgili hükümlerin Banka
          ve ALICI arasındaki “Kredi Kartı Sözleşmesi” kapsamında uygulanacağını
          kabul, beyan ve taahhüt eder.
        </p>
        <b>8.SEVKİYAT/TESLİMAT PROSEDÜRÜ</b>
        <p>
          8.1. SEVKİYAT:Sipariş onayı mailinin gönderilmesiyle birlikte
          ürün/ürünler SATICI’nın anlaşmalı olduğu kargo Şirketine verilir.
        </p>
        <p>8.2. TESLİMAT:</p>
        <p>
          8.2.1. Kargo fiyatı sipariş toplam tutarına eklenmekte ve ALICI
          tarafından ödenmektedir. Ürün bedeline dâhil değildir. Ürün/ürünler
          SATICI’nın anlaşmalı olduğu kargo ile ALICI’nın adresine teslim
          edilecektir.
        </p>
        <p>
          8.2.2. SATICI satış anında yürüttüğü ve/veya web sitesinde şartlarını
          ilan ettiği kampanyalara bağlı olarak kargo ücretinin tamamını ya da
          bir kısmını ALICI’ya yansıtmayabilir. SATICI kargo ücretine yönelik
          olarak uygulanan usul ve yöntemleri gelecekte değiştirme hakkını saklı
          tutar.
        </p>
        <p>
          8.2.3. Teslimat süresi, Sipariş onayı mailinin gönderilmesinden ve
          sözleşmenin kurulmasından itibaren 30 gündür. ALICI’ya önceden yazılı
          olarak veya bir sürekli veri taşıyıcısıyla bildirilmek koşuluyla bu
          süre en fazla on gün uzatılabilir. Ürünler, Kargo şirketlerinin adres
          teslimatı yapmadığı bölgelere telefon ihbarlı olarak gönderilir.
        </p>
        <p>
          8.2.4.. Kargo Şirketinin haftada bir gün teslimat yaptığı bölgelerde,
          sevk bilgilerindeki yanlışlık ve eksiklik olduğu hallerde, bazı sosyal
          olaylar ve doğal afetler gibi durumlarda belirtilen gün süresinde
          sarkma olabilir. Bu sarkmalardan dolayı ALICI, SATICI’ya herhangi bir
          sorumluluk yükleyemez.
        </p>
        <p>
          8.2.5. Ürün, ALICI’dan başka bir kişi/kuruluşa teslim edilecek ise,
          teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden, sevk
          bilgilerindeki yanlışlık ve/veya ALICInın yerinde olmamasından
          doğabilecek ekstra kargo bedellerinden SATICI sorumlu değildir.
          Belirtilen günler içeriğinde ürün/ürünler müşteriye ulaşmadıysa
          teslimat problemleri https://www.efalcollection.com da yer alan
          müşteri hizmetlerine derhal bildirilmelidir.
        </p>
        <p>
          8.2.6.Zarar görmüş paket durumunda; Zarar görmüş paketler teslim
          alınmayarak Kargo Şirketi yetkilisine tutanak tutturulmalıdır. Eğer
          Kargo Şirketi yetkilisi paketin hasarlı olmadığı görüşünde ise,
          paketin orada açılarak ürünlerin hasarsız teslim edildiğini kontrol
          ettirme ve durumun yine bir tutanakla tespit edilmesini isteme hakkı
          ALICI’da vardır. Paket ALICI tarafından teslim alındıktan sonra Kargo
          Şirketinin görevini tam olarak yaptığı kabul edilmiş olur. Paket kabul
          edilmemiş ve tutanak tutulmuş ise, durum, tutanağın ALICI’da kalan
          kopyasıyla birlikte en kısa zamanda SATICI Müşteri Hizmetlerine
          bildirilmelidir.
        </p>
        <b>9.ÜRÜN İADE VE CAYMA HAKKINA İLİŞKİN PROSEDÜRÜ</b>
        <p>9.1. ÜRÜN İADE:</p>
        <p>
          9.1.1.ALICI malı teslim aldıktan sonra 14 (on dört gün) içerisinde
          herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin
          sözleşmeden cayma hakkına sahiptir.
        </p>
        <p>
          9.1.2.Cayma hakkının kullanım süresi çoklu siparişlerde son ürünün
          tarafınıza ya da sizin yerinize belirlediğiniz, taşıyıcı firma hariç,
          üçüncü kişilere teslim edilmesinden itibaren ve tekli siparişlerde
          ürünün tarafınıza ya da sizin yerinize belirlediğiniz, taşıyıcı firma
          hariç, üçüncü kişilere teslim edilmesinden itibaren başlayacaktır.
        </p>
        <p>
          9.1.3.Cayma hakkı bildirimi ve Sözleşme’ye ilişkin bildirimler
          Platform’da belirtilen iletişim kanalları ile gösterilecektir.
        </p>
        <p>
          9.1.4.Cayma hakkı süresi ALICI’ya malın teslim edildiği günden
          itibaren başlar. İade edilen ürün veya ürünlerin iade kargo bedeli
          ilave masraf alınmaksızın SATICI tarafından karşılanır. Kargo bedeline
          ilişkin Türkiye dışından verilen siparişlerinde vergi ücretlerinde
          farklılık talep edilebilecektir. ALICI’nın cayma hakkını kullanması
          halinde SATICI ürün bedelinin iadesinde gecikmeyi haklı kılan herhangi
          bir hal yok ise en geç 14 (on dört) gün içerisinde
          gerçekleştirilecektir.
        </p>
        <p>
          9.1.5.ALICI’nın istekleri ve/veya açıkça onun kişisel ihtiyaçları
          doğrultusunda hazırlanan mallar için cayma hakkı söz konusu değildir.
        </p>
        <p>
          9.1.6.Cayma hakkı kapsamında iade edilecek Mal kutusu, ambalajı, varsa
          standart aksesuarları varsa Mal ile birlikte hediye edilen diğer
          ürünlerin de eksiksiz ve hasarsız olarak iade edilmesi gerekmektedir.
        </p>
        <p>
          9.1.7.Ürün iadesi için iade isteği öncelikli olarak müşteri
          hizmetlerine iletilmelidir. Ürünün iade bilgileri SATICI tarafından
          ALICI’ya iletilir. Bu iletişimden sonra ürün; iade ile ilgili
          bilgilerini içeren faturasıyla birlikte ALICI’nın adresine teslimatı
          yapan Kargo şirketi kanalıyla SATICI’ya ulaştırmalıdır. SATICI’ya
          ulaşan iade ürün iş bu sözleşmede belirtilen koşulları sağladığı
          takdirde iade olarak kabul edilir, iade ödemesi de ALICI kredi
          kartına/hesabına yapılır. Ürün SATICI’ya iade olarak teslim edilmeden
          bedelinin iadesi yapılmaz. Kredi Kartına yapılan iadelerin kredi kartı
          hesaplarına yansıma süresi ilgili bankanın tasarrufundadır.
        </p>
        <p>
          9.1.8.Alışveriş kredi kartı ile ve taksitli olarak yapılmışsa, kredi
          kartına iade prosedürü şu şekilde uygulanacaktır: ALICI ürünü kaç
          taksit ile satın alma talebini iletmiş ise, Banka ALICI’ya geri
          ödemesini bu sayıda taksitle yapmaktadır. SATICI, bankaya ürün
          bedelinin tamamını tek seferde ödedikten sonra, banka poslarından
          yapılan taksitli harcamaların ALICI’nın kredi kartına iadesi durumunda
          konuya müdahil tarafların mağdur duruma düşmemesi için talep edilen
          iade tutarları, yine taksitli olarak hamil taraf hesaplarına Banka
          tarafından aktarılır. ALICI’nın satış iptaline kadar ödemiş olduğu
          taksit tutarları, eğer iade tarihi ile kartın hesap kesim tarihleri
          çakışmazsa her ay karta 1(bir) iade yansıyacak ve ALICI iade öncesinde
          ödemiş olduğu taksitleri satışın taksitleri bittikten sonra, iade
          öncesinde ödemiş olduğu taksit sayısı kadar ay daha alacak ve mevcut
          borçlarından düşmüş olacaktır.
        </p>
        <p>
          9.1.9.Kart ile alınmış mal ve hizmetin iadesi durumunda SATICI, Banka
          ile yapmış olduğu sözleşme gereği ALICI’ya nakit para ile ödeme
          yapamaz. Üye işyeri yani SATICI, bir iade işlemi söz konusu olduğunda
          ilgili yazılım aracılığı ile iadesini yapacak olup, üye işyeri yani
          SATICI ilgili tutarı bankaya nakden veya mahsuben ödemekle yükümlü
          olduğundan yukarıda detayları belirtilen prosedür gereğince ALICI’ya
          nakit olarak ödeme yapılamamaktadır. Kredi kartına iade, ALICI’nın
          Bankaya bedeli tek seferde ödemesinden sonra, Banka tarafından
          yukarıdaki prosedür gereğince yapılacaktır.
        </p>
        <b>10.CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</b>
        <p>
          Kanunen aşağıda sayılan mal/hizmetlere ilişkin sözleşmelerde,
          kullanılmamış/istifade edilmemiş olsa dahi, cayma hakkı
          bulunmamaktadır :
        </p>
        <ul>
          <li>
            ALICI'nın özel istekleri veya onun kişisel ihtiyaçları doğrultusunda
            hazırlanan mallar (üzerinde değişiklik ya da ilaveler yapılarak
            kişiye/kişisel ihtiyaçlara özel hale getirilenler, ALICI siparişine
            istinaden yurt içinden veya dışından ithal/temin edilen özel Ürünler
            dahil) Kozmetik ve benzer nevi ürünler ile çikolata vb. gıda
            maddeleri gibi çabuk bozulabilen veya son kullanma tarihi
            geçebilecek mallar,
          </li>
          <li>
            Kozmetik, mayo, iç giyim mamülleri vb. teslimden sonra ambalaj,
            bant, mühür, paket gibi koruyucu unsurları açılmış ve iadesi
            sağlık-hijyen açısından uygun olmayan mallar ve tek kullanımlık
            ürünler
          </li>
          <li>
            Teslim edildikten sonra başka ürünlerle karışan ve doğası gereği
            ayrıştırılması mümkün olmayan ürünler,
          </li>
          <li>
            Ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış kitap,
            CD, DVD, ses ve görüntü kayıtları, yazılımlar vb. digital içerikli
            her türlü ürünler ile bilgisayar sarf malzemeleri,
          </li>
          <li>
            Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi
            gibi süreli yayınlara ilişkin mallar,
          </li>
          <li>
            Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve
            satıcı/sağlayıcının kontrolünde olmayan mal veya hizmetler,
          </li>
          <li>
            Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye
            anında teslim edilen gayrimaddi mallar ile ses veya görüntü
            kayıtlarının, kitap, dijital içerik, yazılım programlarının, veri
            kaydedebilme ve veri depolama cihazlarının,bilgisayar sarf
            malzemeleri ambalajının ALICI tarafından açılmış olması halinde söz
            konusu ürünler,
          </li>
          <li>
            Genel olarak ilgili mevzuat uyarınca mesafeli satış kapsamı dışında
            kabul edilen diğer mal-hizmetler ile ALICI'nın ticari/mesleki amaçla
            satın alma yaptığı hallerin iadesi Yönetmelik gereği mümkün
            değildir. Ayrıca Cayma hakkı süresi sona ermeden önce, tüketicinin
            onayı ile ifasına başlanan hizmetlere ilişkin cayma hakkının
            kullanılması da Yönetmelik gereği mümkün değildir.
          </li>
        </ul>
        <b>11.GARANTİ</b>
        <p>
          Kullanma talimatına uygun şekilde kullanılan ve temizliği yapılan
          ürünler her türlü üretim hatasına karşı 2 yıl garantilidir.
        </p>
        <b>12.GİZLİLİK</b>
        <p>
          12.1.ALICI’ya ait olan ve işbu mesafeli satış sözleşmesi kapsamında
          bulunan tüm kişisel veriler hizmetin sağlanması, müşteri
          portföylerinin oluşturulması, kalite takip işlemlerinin yürütülmesi,
          iade ve cayma gibi hizmet sonrası işlemlerin yürütülmesi,
          hizmetlerimizin geliştirilmesi amacı ile kullanılabilecektir.
        </p>
        <p>
          12.2.ALICI tarafından doğrudan banka ve benzeri kart kuruluşlarınca
          çevrimiçi olarak gerçekleştirilen işlemlerde kart bilgileriniz
          tarafımızca görülmez ve kaydedilmez. Kredi Kartı bilgileri sadece
          tahsilat işlemi sırasında ilgili bankalara güvenli bir şekilde
          iletilerek provizyon alınması için kullanılır ve provizyon sonrası
          sistemden silinir.
        </p>
        <p>
          12.3.ALICI tarafından iş bu sözleşmede belirtilen bilgiler ile ödeme
          yapmak amacı ile SATICI’ya bildirdiği bilgiler SATICI tarafından 3.
          şahıslarla paylaşılmayacaktır.
        </p>
        <p>
          12.4.ALICI’ya ait e-posta adresi, posta adresi ve telefon gibi
          bilgiler yalnızca SATICI tarafından standart ürün teslim ve
          bilgilendirme prosedürleri için kullanılır. Bu bilgiler tamamen satın
          alınan ürünün tarafınıza ulaştırılması amacıyla gerekmektedir.
        </p>
        <p>
          12.5.ALICI’nın SATICI ile iletişime geçmesi halinde iletişim bilgileri
          ve detayları şikayet ve taleplerin gereklerinin yapılması ve bu
          süreçlerin yürütülmesi için ve müşteri portföylerinin oluşturulması
          için işlenebilir.
        </p>
        <p>
          12.6.Bazı dönemlerde kampanya bilgileri, yeni ürünler hakkında
          bilgiler, promosyon bilgileri gibi ticari elektronik iletiler ALICI’ya
          onayı sonrasında gönderilebilir.
        </p>
        <p>
          12.7.SATICI ALICI’ya ait ad soyad, adres ve telefon bilgilerini
          siparişlerin ulaştırılabilmesi amacıyla ilgili kargo hizmeti sunucusu
          şirketler ile paylaşacaktır.
        </p>
        <p>
          12.8.SATICI bu bilgileri sadece yasal zorunluluğu veya kanuni
          yükümlülüğü kapsamında ilgili kamu kurum ve kuruluşlarına
          açıklayabilecektir. Araştırma ehliyeti belgelenmiş her türlü adli
          soruşturma dâhilinde SATICI kendisinden istenen bilgiyi elinde
          bulunduruyorsa ilgili makama sağlayabilir.
        </p>
        <b>13.UYUŞMAZLIK DURUMUNDA YETKİLİ MAHKEME VE İCRA DAİRELERİ</b>
        <p>
          İşbu sözleşmenin uygulanmasından kaynaklanan uyuşmazlık halinde,
          SATICI kayıtları (bilgisayar, ses kayıtları gibi manyetik ortamdaki
          kayıtlar dahil) kesin delil oluşturur. İlgili hükümler saklı kalmak
          üzere işbu Sözleşme, tarafların ödeme/teslim yükümlülüklerini yerine
          getirdikleri zamana kadar yürürlüktedir. İşbu sözleşmenin şartları
          bakımından Türk hukuku uygulanacak olup Sanayi ve Ticaret Bakanlığınca
          her yıl Aralık ayında ilan edilen değere kadar Tüketici Hakem
          Heyetleri ile SATICI’nın yerleşim yerindeki Tüketici Mahkemeleri
          yetkilidir. Siparişin onaylanmasıyla ALICI işbu sözleşmenin tüm
          koşullarını kabul etmiş sayılır.
        </p>
        <b>14. Ürün Açıklama ve Bilgilendirmesi</b>
        <p>
          ALICI aldığı ürünün altında bulunan Açıklama ve Bilgilendirmeleri
          okuyarak kabul ettiğini onaylar.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgreementModal;
