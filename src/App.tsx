import { motion } from "motion/react";
import { 
  Check, 
  ChevronDown, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Coffee, 
  Shuffle, 
  Moon, 
  MousePointer2, 
  AlertCircle, 
  CheckCheck,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { ReactNode, useState } from "react";

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="p-7 text-center border-r border-whatsapp/10 last:border-r-0">
    <span className="font-display font-extrabold text-4xl text-whatsapp block tracking-tighter">
      {number}
    </span>
    <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc, delay = 0 }: { icon: string; title: string; desc: string; delay?: number }) => (
  <Reveal delay={delay}>
    <div className="flex gap-4 items-start group">
      <div className="w-12 h-12 rounded-xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-2xl shrink-0 group-hover:border-whatsapp/40 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-lg mb-1.5">{title}</h3>
        <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  </Reveal>
);

const ShieldCard = ({ num, icon, title, desc, value, delay = 0 }: { num: string; icon: ReactNode; title: string; desc: string; value: string; delay?: number }) => (
  <Reveal delay={delay}>
    <div className="bg-dark-surface border border-whatsapp/10 rounded-2xl p-7 relative overflow-hidden transition-all hover:border-whatsapp/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group">
      <div className="absolute top-3 right-4 font-display font-extrabold text-5xl text-whatsapp/5 tracking-tighter">
        {num}
      </div>
      <div className="text-whatsapp mb-4">{icon}</div>
      <h3 className="font-display font-bold text-base mb-2">{title}</h3>
      <p className="text-xs text-stone-400 leading-relaxed mb-4">{desc}</p>
      <div className="inline-block bg-whatsapp/10 border border-whatsapp/20 text-whatsapp text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {value}
      </div>
    </div>
  </Reveal>
);

const PricingCard = ({ tier, price, features, featured = false, delay = 0 }: { tier: string; price: string; features: string[]; featured?: boolean; delay?: number }) => (
  <Reveal delay={delay}>
    <div className={`rounded-3xl p-9 relative overflow-hidden border transition-all hover:-translate-y-1.5 ${featured ? 'bg-gradient-to-br from-[#0a2a14] to-[#0d3318] border-whatsapp shadow-2xl shadow-whatsapp/10' : 'bg-dark-surface border-whatsapp/15'}`}>
      {featured && (
        <div className="absolute top-5 right-5 bg-whatsapp text-dark-bg text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Popular
        </div>
      )}
      <div className="font-display font-bold text-xs tracking-widest uppercase text-whatsapp mb-4">{tier}</div>
      <div className="font-display font-extrabold text-5xl tracking-tighter mb-1">
        <span className="text-xl font-medium align-super mr-1">RON</span>
        {price}
      </div>
      <div className="text-xs text-stone-500 mb-7">plată unică · fără abonament</div>
      <div className="w-full h-px bg-whatsapp/15 mb-7" />
      <ul className="space-y-3 mb-7">
        {features.map((f, i) => (
          <li key={i} className={`text-sm flex gap-2.5 items-start ${i < 3 ? 'text-white font-medium' : 'text-stone-400'}`}>
            <Check className="w-4 h-4 text-whatsapp shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3.5 rounded-xl font-display font-bold text-sm transition-all tracking-wide ${featured ? 'bg-whatsapp text-dark-bg shadow-lg shadow-whatsapp/20 hover:bg-[#2ee875] hover:shadow-whatsapp/40' : 'bg-transparent text-whatsapp border border-whatsapp hover:bg-whatsapp/10'}`}>
        {featured ? '🚀 Cel mai ales' : '📱 Contactează-ne'}
      </button>
    </div>
  </Reveal>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-whatsapp/10 rounded-xl overflow-hidden bg-dark-surface mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center font-display font-semibold text-sm hover:text-whatsapp transition-colors"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-whatsapp transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-sm text-stone-400 leading-relaxed border-t border-whatsapp/5">
          {a}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="noise-overlay min-h-screen selection:bg-whatsapp/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[900] px-6 md:px-16 py-5 flex items-center justify-between bg-dark-bg/80 backdrop-blur-md border-b border-whatsapp/5">
        <div className="font-display font-extrabold text-xl tracking-tight text-whatsapp">
          Human<span className="text-white">Bot</span>
        </div>
        <div className="bg-whatsapp text-dark-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-dark-bg rounded-full animate-pulse" />
          Live & Running
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center">
        {/* Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-whatsapp/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-whatsapp-dark/10 rounded-full blur-[100px] animate-pulse delay-700" />
        
        <Reveal>
          <div className="inline-flex items-center gap-2.5 bg-whatsapp/10 border border-whatsapp/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-whatsapp mb-8">
            <div className="w-1.5 h-1.5 bg-whatsapp rounded-full animate-ping" />
            Tehnologie de automatizare invizibilă
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[0.95] tracking-tight mb-6">
            Nu e un bot.<br />
            <span className="bg-gradient-to-r from-whatsapp via-[#00ff88] to-whatsapp bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
              E un om digital.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg text-stone-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Primul sistem de outreach WhatsApp care nu poate fi detectat — pentru că se comportă <em className="text-white not-italic font-medium">exact</em> ca un om real. Mesaje unice, timpi umani, zero ban.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <button className="bg-whatsapp text-dark-bg font-display font-bold px-9 py-4 rounded-xl hover:bg-[#2ee875] transition-all hover:-translate-y-1 shadow-xl shadow-whatsapp/20 flex items-center gap-2">
              📱 Vreau sistemul <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/15 text-white font-display font-bold px-9 py-4 rounded-xl hover:border-whatsapp hover:text-whatsapp transition-all">
              Cum funcționează ↓
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 bg-dark-surface/50 backdrop-blur-xl border border-whatsapp/10 rounded-3xl overflow-hidden">
            <StatItem number="2.000+" label="Mesaje per campanie" />
            <StatItem number="0%" label="Șansă de detecție" />
            <StatItem number="~95%" label="Rată de livrare" />
            <StatItem number="0 €" label="Abonament lunar" />
          </div>
        </Reveal>
      </section>

      {/* Human Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-dark-surface to-dark-bg border-y border-whatsapp/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 text-whatsapp font-bold text-[10px] uppercase tracking-widest mb-6">
              <div className="w-6 h-px bg-whatsapp" />
              De ce e diferit
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight mb-6">
              Scrie ca un om.<br />Gândește ca un om.<br /><span className="text-whatsapp">Nu pică niciodată.</span>
            </h2>
            <p className="text-stone-400 mb-12 leading-relaxed">
              Nu trimite același mesaj la toată lumea. Nu trimite la oră fixă. Nu are pattern. WhatsApp nu poate distinge botul de un utilizator real pentru că <strong className="text-white font-semibold">nu există diferență.</strong>
            </p>

            <div className="grid gap-8">
              <FeatureCard 
                icon="✍️" 
                title="Mesaj 100% unic per contact" 
                desc="Fiecare restaurant primește mesajul lui, cu numele lui, personalizat din CSV. Niciodată același text de două ori." 
                delay={0.1}
              />
              <FeatureCard 
                icon="⏱️" 
                title="Timpi complet aleatorii" 
                desc="60-180s între mesaje + pauze de cafea random + typing caracter cu caracter. Pattern-ul e imposibil de detectat algoritmic." 
                delay={0.2}
              />
              <FeatureCard 
                icon="🔀" 
                title="Ordine aleatorie" 
                desc="La fiecare pornire, ordinea contactelor se amestecă. Nu există secvență previzibilă pe care WhatsApp să o detecteze." 
                delay={0.3}
              />
              <FeatureCard 
                icon="🌙" 
                title="Doarme noaptea" 
                desc="Activ doar 09:00-19:00. Nimeni nu trimite mesaje la 3 noaptea — nici botul tău." 
                delay={0.4}
              />
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="bg-[#0a1628] rounded-[32px] border border-whatsapp/15 shadow-2xl overflow-hidden max-w-md mx-auto">
              <div className="bg-whatsapp-deep p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-whatsapp-dark flex items-center justify-center text-xl">🍕</div>
                <div>
                  <div className="font-display font-bold text-sm">Pizza Bella Roma</div>
                  <div className="text-[10px] text-white/60">online</div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#1f5c35] self-end p-3 rounded-2xl rounded-tr-none text-xs max-w-[85%] relative"
                >
                  Bună ziua! Am remarcat locația dumneavoastră <strong className="font-bold">Pizza Bella Roma</strong> 🍕 și credem că are un potențial real!
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[8px] opacity-60">09:14</span>
                    <CheckCheck className="w-3 h-3 text-[#53d3f5]" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="bg-[#1a2a1a] self-start p-3 rounded-2xl rounded-tl-none border border-whatsapp/10 flex gap-1 items-center"
                >
                  <div className="w-1 h-1 bg-stone-500 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-stone-500 rounded-full animate-bounce delay-75" />
                  <div className="w-1 h-1 bg-stone-500 rounded-full animate-bounce delay-150" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 }}
                  className="bg-[#1a2a1a] self-start p-3 rounded-2xl rounded-tl-none border border-whatsapp/10 text-xs max-w-[85%]"
                >
                  Bună! Da, suntem interesați. Spuneți-mi mai multe...
                  <div className="flex justify-end mt-1">
                    <span className="text-[8px] opacity-40">09:17</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.5 }}
                  className="bg-[#1f5c35] self-end p-3 rounded-2xl rounded-tr-none text-xs max-w-[85%]"
                >
                  Suntem Mister Delivery — automatizăm comenzile și aducem mai mulți clienți 🚀
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[8px] opacity-60">09:19</span>
                    <CheckCheck className="w-3 h-3 text-[#53d3f5]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Anti-Ban Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-whatsapp font-bold text-[10px] uppercase tracking-widest mb-6">
            <div className="w-6 h-px bg-whatsapp" />
            Protecție multiplă
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight mb-6">
            12 straturi de<br /><span className="text-whatsapp">protecție anti-ban.</span>
          </h2>
          <p className="text-stone-400 max-w-xl mb-16 leading-relaxed">
            Fiecare parametru e calibrat pentru a simula comportamentul uman. Sistemul se auto-ajustează în timp real și se oprește dacă detectează orice semn de pericol.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ShieldCard num="01" icon={<Clock className="w-7 h-7" />} title="Delay Adaptiv" desc="Delay-ul crește automat dacă rata de succes scade. Niciodată sub 60 secunde." value="60 – 300 sec" delay={0.1} />
          <ShieldCard num="02" icon={<Zap className="w-7 h-7" />} title="Batch Variabil" desc="8-12 mesaje per sesiune (aleatoriu), nu un număr fix detectabil de algoritmi." value="8 – 12 mesaje" delay={0.2} />
          <ShieldCard num="03" icon={<Coffee className="w-7 h-7" />} title="Pauze Umane" desc="15% șansă de pauza de 1.5-6 minute după orice mesaj. Simulează distragerea." value="15% · 90–360 sec" delay={0.3} />
          <ShieldCard num="04" icon={<Shuffle className="w-7 h-7" />} title="Ordine Aleatorie" desc="Contactele se amestecă la fiecare pornire. Zero pattern secvențial." value="shuffle() la start" delay={0.4} />
          <ShieldCard num="05" icon={<Smartphone className="w-7 h-7" />} title="Pauze Batch Mari" desc="15-45 minute pauza între batch-uri. Nu 5 minute ca alte soluții." value="15 – 45 min" delay={0.5} />
          <ShieldCard num="06" icon={<Moon className="w-7 h-7" />} title="Sleep Nocturn" desc="Oprire automată la 19:00, repornire la 09:00. Nicio activitate noaptea." value="09:00 – 19:00" delay={0.6} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-dark-surface/50 border-y border-whatsapp/10">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-whatsapp font-bold text-[10px] uppercase tracking-widest mb-6">
              <div className="w-6 h-px bg-whatsapp" />
              Pachete disponibile
              <div className="w-6 h-px bg-whatsapp" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-center mb-6">
              Investiție unică.<br /><span className="text-whatsapp">Zero abonament.</span>
            </h2>
            <p className="text-stone-400 text-center max-w-xl mx-auto mb-16 leading-relaxed">
              Alternativele SaaS costă 50-200€/lună. Tu plătești o singură dată și folosești nelimitat.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard 
              tier="Starter" 
              price="299" 
              features={[
                "Sistemul complet v8",
                "CSV template pregătit",
                "Ghid PDF instalare",
                "Suport setup WhatsApp (1h)",
                "Până la 500 contacte/campanie",
                "Toate cele 12 protecții anti-ban"
              ]}
              delay={0.1}
            />
            <PricingCard 
              tier="Professional" 
              price="599" 
              featured
              features={[
                "Tot din Starter",
                "Instalare pe PC-ul tău",
                "Mesaje scrise pentru industria ta",
                "CSV cu 1.000 contacte relevante",
                "Suport 30 zile WhatsApp",
                "1 campanie supervizată împreună",
                "Dashboard live configurat"
              ]}
              delay={0.2}
            />
            <PricingCard 
              tier="Enterprise" 
              price="1.299" 
              features={[
                "Tot din Professional",
                "Contacte nelimitate",
                "2 numere WhatsApp configurate",
                "Rapoarte automate săptămânale",
                "Suport 3 luni prioritar",
                "Training echipă (3 persoane)",
                "Adaptare completă industria ta"
              ]}
              delay={0.3}
            />
          </div>

          {/* ROI Calculator */}
          <Reveal delay={0.4}>
            <div className="mt-16 bg-whatsapp/5 border border-whatsapp/20 rounded-3xl p-8 md:p-12">
              <div className="font-display font-bold text-lg text-whatsapp mb-8 flex items-center gap-2">
                💰 Calculator ROI rapid
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="font-display font-extrabold text-3xl mb-1">500</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest">mesaje trimise</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-3xl mb-1">5%</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest">rată conversie</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-3xl mb-1">25</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest">clienți noi</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-3xl text-whatsapp mb-1">1.250 RON</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest">venit estimat</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-whatsapp/10 text-xs text-stone-400 leading-relaxed">
                ✦ Investiția de 299 RON se recuperează din <strong className="text-white">primul batch de mesaje</strong>. WhatsApp are rată de deschidere de <strong className="text-whatsapp">98%</strong> față de email (20%).
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-whatsapp font-bold text-[10px] uppercase tracking-widest mb-6">
            <div className="w-6 h-px bg-whatsapp" />
            Întrebări frecvente
            <div className="w-6 h-px bg-whatsapp" />
          </div>
          <h2 className="text-4xl font-display font-extrabold text-center mb-16">Răspunsuri oneste.</h2>
        </Reveal>

        <div className="space-y-1">
          <FAQItem 
            q="Pot fi banat de WhatsApp?" 
            a="Riscul există dacă trimiți prea repede sau prea mult. Sistemul nostru este construit specific pentru a minimiza acest risc: delay 60-180s, batch-uri mici, pauze mari, ore de lucru limitate și detecție automată de ban cu oprire imediată. La volume rezonabile (50-80 mesaje/zi) și cu un cont cu istoric, riscul este minim." 
          />
          <FAQItem 
            q="Trebuie să stau la calculator cât rulează?" 
            a="Nu. Botul rulează complet automat 09:00-19:00, doarme noaptea și reia dimineața. Singurul lucru: ecranul PC-ului nu trebuie să se blocheze și WhatsApp Desktop trebuie să rămână deschis. Poți lucra pe alt monitor sau alt dispozitiv în tot acest timp." 
          />
          <FAQItem 
            q="Ce se întâmplă dacă întrerup campania?" 
            a="Ctrl+C salvează progresul imediat. La repornire, botul citește fișierul de progres și reia exact de la contactul următor. Nicio trimitere dublă, niciun contact sărit, nicio pierdere de date." 
          />
          <FAQItem 
            q="Funcționează pentru orice industrie?" 
            a="Da. Sistemul este 100% parametrizabil — tot ce schimbi este fișierul CSV cu contactele și mesajele personalizate. A fost folosit pentru restaurante, real estate, saloane beauty, B2B servicii și mai mult. Codul rămâne identic, se adaptează instant la orice industrie." 
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative overflow-hidden text-center px-6 bg-gradient-to-b from-dark-bg to-dark-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.08)_0%,transparent_70%)]" />
        
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 relative">
            Primul mesaj<br /><span className="text-whatsapp">în 10 minute.</span>
          </h2>
          <p className="text-stone-400 max-w-md mx-auto mb-10 text-lg relative">
            Demonstrație live gratuită. Îți arătăm exact cum funcționează pe PC-ul tău.
          </p>
          <div className="font-display font-extrabold text-3xl md:text-5xl text-whatsapp tracking-tight mb-12 relative">
            📱 +40 750 270 041
          </div>
          <button className="bg-whatsapp text-dark-bg font-display font-bold px-12 py-5 rounded-xl hover:bg-[#2ee875] transition-all hover:-translate-y-1 shadow-2xl shadow-whatsapp/30 relative text-lg">
            Scrie-ne pe WhatsApp acum →
          </button>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-16 border-t border-whatsapp/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-stone-500 uppercase tracking-widest">
        <div>
          © 2026 <strong className="text-whatsapp font-bold">MrDelivery</strong> · WhatsApp Outreach Bot v8
        </div>
        <div className="flex gap-6">
          <span>Construit cu Python</span>
          <span>Rulează local</span>
          <span>Datele rămân la tine</span>
        </div>
      </footer>
    </div>
  );
}
