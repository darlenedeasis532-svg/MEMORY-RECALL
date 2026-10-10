/* CRIMINOLOGY RECALL MASTER - Recall. Retain. Review. */
const CATS=["Criminology","Forensic Science","Correctional Administration","Crime Detection and Investigation","Criminal Law and Jurisprudence","Law Enforcement Administration"];
const SHORT=["Criminology","Forensic Science","Correctional Admin.","CDI","Criminal Law","LEA"];
const DIFFS=["Easy","Medium","Hard"];
const MODES=[["All modes mixed","start"],["Quick Recall","recall"],["True or False","tf"],["Identify the Concept","id"],["Memory Match","match"],["Retention Challenge","ret"]];

/* ---- QUESTION BANK (easy to edit) ----
   [categoryIndex, E/M/H, type(mc|id|tf), question, answer, wrongChoices[], explanation] */
const Q=[
[0,"E","mc","Who is known as the Father of Modern Criminology?","Cesare Lombroso",["Cesare Beccaria","Edwin Sutherland","Jeremy Bentham"],"Lombroso founded the positivist school; Beccaria is the Father of Classical Criminology."],
[0,"M","mc","Which theory says people commit crime after weighing its costs and benefits?","Rational Choice Theory",["Strain Theory","Labeling Theory","Atavism"],"Classical and rational choice thinking assume free will and calculation of pleasure versus pain."],
[0,"E","id","Criminal behavior is blamed on inherited, primitive physical traits. Which theory is this?","Atavism",["Differential Association","Anomie","Routine Activity"],"Lombroso's atavism describes criminals as evolutionary throwbacks."],
[0,"H","id","Edwin Sutherland proposed which theory, stating that crime is learned through close association with others?","Differential Association",["Social Bond Theory","Broken Windows","Strain Theory"],"Differential association holds that criminal behavior is learned in intimate groups."],
[0,"E","tf","Criminology is the scientific study of crime, criminals, and criminal behavior.","True",[],"This is the basic definition of criminology."],
[0,"M","tf","Cesare Beccaria is the Father of Positivist Criminology.","False",[],"Beccaria belongs to the Classical school; Lombroso is linked to the Positivist school."],
[1,"E","mc","What is the study of fingerprints called?","Dactyloscopy",["Ballistics","Toxicology","Serology"],"Dactyloscopy is the study and identification of fingerprints."],
[1,"M","mc","Which branch deals with firearms, bullets, and projectiles?","Forensic Ballistics",["Toxicology","Questioned Documents","Forensic Odontology"],"Forensic ballistics studies firearms and their projectiles."],
[1,"E","id","Which branch studies poisons and drugs in the body?","Toxicology",["Serology","Dactyloscopy","Polygraphy"],"Toxicology examines poisons, drugs, and their effects."],
[1,"H","id","Which principle states that every contact leaves a trace?","Locard's Exchange Principle",["Daubert Standard","Bertillon System","Henry Classification"],"Edmond Locard: when two objects touch, they exchange material."],
[1,"E","tf","Dactyloscopy is the study of DNA.","False",[],"Dactyloscopy is fingerprint study, not DNA analysis."],
[1,"M","tf","Fingerprints are unique to each person and remain unchanged for life.","True",[],"Individuality and permanency are basic fingerprint principles."],
[2,"E","mc","Which agency manages city, municipal, and district jails in the Philippines?","BJMP",["BuCor","PNP","PDEA"],"The Bureau of Jail Management and Penology runs local jails."],
[2,"M","mc","Which agency manages national penitentiaries for sentences over three years?","Bureau of Corrections",["BJMP","NAPOLCOM","Parole and Probation Administration"],"BuCor handles national prisoners such as those at the New Bilibid Prison."],
[2,"E","id","Community supervision given to a convicted offender instead of imprisonment is called?","Probation",["Parole","Pardon","Amnesty"],"Probation is a disposition under which a convicted offender stays in the community under supervision."],
[2,"H","id","Conditional release of a prisoner after serving part of the sentence is called?","Parole",["Probation","Commutation","Reprieve"],"Parole is early conditional release from prison under supervision."],
[2,"E","tf","Rehabilitation aims to reform offenders so they can return to society.","True",[],"Rehabilitation is a core goal of corrections."],
[2,"M","tf","The BJMP is under the Department of Justice.","False",[],"BJMP is under the DILG."],
[3,"E","mc","The three I's of investigation are information, interview/interrogation, and what?","Instrumentation",["Intuition","Inspection","Imitation"],"Instrumentation is the application of science and technology to investigation."],
[3,"M","mc","What is the first duty of the investigator upon arriving at a crime scene?","Secure and protect the scene",["Interview the suspect","Collect all evidence at once","Release information to media"],"The scene must be secured first to prevent contamination."],
[3,"E","id","Questioning of a cooperative witness is called?","Interview",["Interrogation","Surveillance","Tailing"],"Interview is for cooperative persons; interrogation is for hostile suspects."],
[3,"H","id","Skillful questioning of a reluctant or hostile suspect is called?","Interrogation",["Interview","Roping","Casing"],"Interrogation is directed at suspects who are unwilling to talk."],
[3,"E","tf","Corpus delicti means the body of the crime.","True",[],"It refers to the facts showing that a crime was committed."],
[3,"M","tf","Anyone may freely enter a crime scene before investigators arrive.","False",[],"Unauthorized entry contaminates evidence."],
[4,"E","mc","The Revised Penal Code of the Philippines is which Act?","Act No. 3815",["Act No. 3185","Act No. 8551","Act No. 7659"],"The RPC took effect in 1932 as Act No. 3815."],
[4,"M","mc","Felonies committed with deceit (dolo) are called?","Intentional felonies",["Culpable felonies","Impossible crimes","Light felonies"],"Intentional felonies are committed with malice or deliberate intent."],
[4,"E","id","Which circumstance frees an accused from liability, such as insanity?","Exempting circumstance",["Mitigating circumstance","Aggravating circumstance","Alternative circumstance"],"Exempting circumstances remove criminal liability."],
[4,"H","id","Which circumstance increases the penalty, such as treachery?","Aggravating circumstance",["Exempting circumstance","Justifying circumstance","Mitigating circumstance"],"Aggravating circumstances raise the penalty."],
[4,"E","tf","Ignorance of the law excuses compliance with it.","False",[],"Ignorance of the law excuses no one."],
[4,"M","tf","Mala in se are acts inherently wrong by nature.","True",[],"Mala in se, like murder, are wrong in themselves."],
[5,"E","mc","The PNP is under which department?","DILG",["DOJ","DND","DOTr"],"RA 6975 placed the PNP under the DILG."],
[5,"M","mc","What is the highest rank in the PNP?","Police General",["Police Colonel","Police Lieutenant General","Police Brigadier General"],"Police General heads the PNP as Chief."],
[5,"E","id","Which police function is called the backbone of police operations?","Patrol",["Investigation","Traffic","Records"],"Patrol is the main field function of the police."],
[5,"H","id","Which body exercises administrative control and operational supervision over the PNP?","NAPOLCOM",["PLEB","PDEA","NBI"],"The National Police Commission oversees the PNP."],
[5,"E","tf","The PNP is a national police force that is civilian in character.","True",[],"RA 6975 describes the PNP as national and civilian."],
[5,"M","tf","RA 6975 created the PNP under the Department of Justice.","False",[],"It was created under the DILG."]
];
const BANK=Q.map(([c,d,t,q,a,w,e])=>({cat:c,category:CATS[c],difficulty:DIFFS["EMH".indexOf(d)],type:t,question:q,choices:t==="tf"?["True","False"]:[a,...w],answer:a,explanation:e}));
/* Terms for Memory Match and Retention Challenge: [cat, term, definition] */
const TERMS=[
[0,"Criminology","Scientific study of crime, criminals, and criminal behavior"],
[0,"Atavism","Lombroso's idea that criminals are evolutionary throwbacks"],
[1,"Forensic Science","Application of science to legal investigations"],
[1,"Dactyloscopy","Study and identification of fingerprints"],
[2,"Correctional Administration","Management and rehabilitation of offenders"],
[2,"Probation","Community supervision given instead of imprisonment"],
[3,"Corpus Delicti","Body of the crime; proof that a crime occurred"],
[3,"Modus Operandi","Method a criminal uses to commit a crime"],
[4,"Mala in se","Acts wrong by nature, such as murder"],
[4,"Felony","Act or omission punished by the Revised Penal Code"],
[5,"NAPOLCOM","Body with administrative control over the PNP"],
[5,"Patrol","Backbone of police operations"]];

/* ---- STORAGE ---- */
const $=s=>document.querySelector(s),app=$("#app");
const rnd=a=>[...a].sort(()=>Math.random()-.5);
const DEF={name:"",high:0,games:0,bestAcc:0,seen:{},prog:CATS.map(()=>[0,0]),wrong:[],ret:{rc:null,mm:null},sound:true};
let S=Object.assign({},DEF,JSON.parse(localStorage.getItem("crm")||"{}"));
const save=()=>localStorage.setItem("crm",JSON.stringify(S));
let G,LC,M,RC,W=-1;
function beep(f){if(!S.sound)return;try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator();o.frequency.value=f;o.connect(a.destination);o.start();o.stop(a.currentTime+.15)}catch(e){}}
const opts=(arr,sel)=>arr.map(([n,v])=>`<option value="${v}" ${v==sel?"selected":""}>${n}</option>`).join("");

/* ---- SCREENS ---- */
function menu(){
 const b=[["START GAME","start"],["QUICK RECALL","recall"],["MEMORY MATCH","match"],["TRUE OR FALSE","tf"],["IDENTIFY THE CONCEPT","id"],["RETENTION CHALLENGE","ret"]];
 app.innerHTML=`<h1>🕵️ CRIMINOLOGY RECALL MASTER</h1><p class=sub>Recall. Retain. Review.</p><div class=card>
 ${S.name?`<p>Welcome back, <b>${S.name}</b>! 🏆 Highest score: ${S.high}</p>`:"<p>Welcome! Train your memory for the Criminology board exam.</p>"}
 ${b.map(([n,m])=>`<button class=btn onclick="setup('${m}')">${n}</button>`).join("")}
 <button class="btn alt" onclick=review()>REVIEW MISTAKES</button>
 <button class="btn alt" onclick=progress()>PROGRESS</button>
 <button class="btn alt" onclick=settings()>SETTINGS</button></div>`}
function setup(m){
 app.innerHTML=`<div class=card><h2>Game Setup</h2>
 <label>Player name</label><input id=nm value="${S.name}" maxlength=20 placeholder="Enter your name">
 <label>Category</label><select id=ct>${opts([["ALL AREAS",-1],...CATS.map((c,i)=>[c,i])],-1)}</select>
 <label>Difficulty</label><select id=df>${opts(DIFFS.map(d=>[d.toUpperCase(),d]),"Easy")}</select>
 <label>Game mode</label><select id=md>${opts(MODES,m)}</select>
 <button class=btn onclick=go()>START</button><button class="btn alt" onclick=menu()>Back</button></div>`}
function go(){
 S.name=$("#nm").value.trim()||"Player";save();
 start({cat:+$("#ct").value,diff:$("#df").value,mode:$("#md").value})}

/* ---- QUIZ ENGINE ---- */
function newG(o,list){G={...o,list,i:0,score:0,ok:0,bad:0,st:0,best:0,lives:o.mode==="ret"?99:3,cs:CATS.map(()=>[0,0]),miss:[]};ask()}
function start(o){
 LC=o;clearInterval(RC&&RC.iv);
 if(o.mode==="match")return match();
 if(o.mode==="ret")return retStudy();
 const t={recall:["mc","id"],tf:["tf"],id:["id"],start:["mc","id","tf"]}[o.mode];
 const inCat=q=>(o.cat<0||q.cat==o.cat)&&t.includes(q.type);
 let f=BANK.filter(q=>inCat(q)&&(o.diff==="Any"||q.difficulty===o.diff));
 if(f.length<4)f=BANK.filter(inCat); // fall back to all difficulties if too few questions
 newG(o,rnd(f).slice(0,10))}
const hud=()=>{const n=G.ok+G.bad;return `<div class=hud>${G.mode==="ret"?"":`<span>${"❤️".repeat(G.lives)}${"🖤".repeat(3-G.lives)}</span>`}<span>⭐ ${G.score}</span><span>✔ ${G.ok}</span><span>✘ ${G.bad}</span><span>🎯 ${n?Math.round(G.ok/n*100):0}%</span><span>🔥 ${G.st}</span><span>🏆 ${Math.max(S.high,G.score)}</span></div>`};
function ask(){
 if(G.i>=G.list.length||G.lives<=0)return finish();
 const q=G.list[G.i],ch=q.type==="tf"?q.choices:rnd(q.choices);
 app.innerHTML=`${hud()}<div class=card><small>${q.category} • ${q.difficulty} • ${G.i+1}/${G.list.length}</small><h2>${q.question}</h2>
 ${ch.map(c=>`<button class="btn ch" onclick=pick(this)>${c}</button>`).join("")}<div id=fb></div></div>`}
/* Checks the chosen answer, updates score, streak, lives, progress and mistakes */
function pick(b){
 const q=G.list[G.i],a=b.textContent,ok=a===q.answer;
 document.querySelectorAll(".ch").forEach(x=>{x.disabled=true;if(x.textContent===q.answer)x.classList.add("good")});
 S.seen[q.question]=S.seen[q.question]||[0,0];S.seen[q.question][ok?0:1]++;
 G.cs[q.cat][1]++;S.prog[q.cat][1]++;let note="";
 if(ok){G.cs[q.cat][0]++;S.prog[q.cat][0]++;G.ok++;G.st++;G.best=Math.max(G.best,G.st);
  let p=10;if(G.st==3)p+=5;if(G.st==5)p+=10;G.score+=p;
  S.wrong=S.wrong.filter(w=>w.question!==q.question);
  b.classList.add("pop");beep(660);note=`✅ Correct! <b class=pop>+${p}</b>${G.st>=3?` 🔥 Streak ${G.st}!`:""}`}
 else{G.bad++;G.st=0;G.lives--;b.classList.add("bad","shake");beep(200);
  const m={question:q.question,mine:a,answer:q.answer,explanation:q.explanation};
  G.miss.push(m);S.wrong=S.wrong.filter(w=>w.question!==q.question);S.wrong.push(m);note="❌ Incorrect."}
 $("#fb").innerHTML=`<p>${note}</p><p><i>${q.explanation}</i></p><button class=btn onclick="G.i++;ask()">Next ▶</button>`;
 save()}

/* Retention Score (0-100): average of overall accuracy, repeated-question accuracy, Retention Challenge and Memory Match */
function retScore(){
 const t=S.prog.reduce((a,p)=>[a[0]+p[0],a[1]+p[1]],[0,0]);
 const r=Object.values(S.seen).filter(v=>v[0]+v[1]>1).reduce((a,v)=>[a[0]+v[0],a[1]+v[0]+v[1]],[0,0]);
 const c=[t[1]?t[0]/t[1]*100:null,r[1]?r[0]/r[1]*100:null,S.ret.rc,S.ret.mm].filter(x=>x!=null);
 return c.length?Math.round(c.reduce((a,b)=>a+b)/c.length):0}
const retMsg=s=>s>=90?"Excellent Retention! You are ready for a harder challenge.":s>=75?"Good Retention! Keep reviewing your weak areas.":s>=60?"Fair Retention. More practice is recommended.":"Keep studying! Review the concepts and try again.";
const pct=p=>p[1]?Math.round(p[0]/p[1]*100):0;
function extremes(prog){ // returns [strongestIndex, weakestIndex] among attempted categories
 const a=prog.map((p,i)=>[i,pct(p)]).filter(x=>prog[x[0]][1]>0).sort((x,y)=>y[1]-x[1]);
 return a.length?[a[0][0],a[a.length-1][0]]:[-1,-1]}
function finish(){
 const n=G.ok+G.bad,acc=n?Math.round(G.ok/n*100):0;
 S.games++;S.high=Math.max(S.high,G.score);S.bestAcc=Math.max(S.bestAcc,acc);
 if(G.mode==="ret")S.ret.rc=acc;
 save();
 const [st,wk]=extremes(G.cs);W=wk;const rs=retScore();
 app.innerHTML=`<div class=card><h2>🏁 GAME COMPLETE!</h2><p><b>${S.name||"Player"}</b></p>
 <p class=big>${G.score} pts</p>
 <p>Accuracy: <b>${acc}%</b> • Correct: <b>${G.ok}</b> • Wrong: <b>${G.bad}</b> • Best streak: <b>${G.best}</b></p>
 <p>Retention Score: <b>${rs}%</b><br>${retMsg(rs)}</p>
 <p>Strongest area: <b>${st<0?"-":CATS[st]}</b><br>Weakest area: <b>${wk<0?"-":CATS[wk]}</b><br>Questions to review: <b>${G.miss.length}</b></p>
 <button class=btn onclick="start(LC)">PLAY AGAIN</button>
 <button class=btn onclick=practiceWeak()>PRACTICE WEAK AREA</button>
 <button class=btn onclick=review()>REVIEW MISTAKES</button>
 <button class="btn alt" onclick=menu()>BACK TO MENU</button></div>`}
function practiceWeak(){
 let w=W>=0?W:extremes(S.prog)[1];
 if(w<0)return alert("Play a few questions first so the game can find your weak area.");
 start({cat:w,diff:"Any",mode:"start"})}
function practiceWrong(){
 const l=BANK.filter(q=>S.wrong.some(w=>w.question===q.question));
 LC={cat:-1,diff:"Any",mode:"start"};newG(LC,rnd(l).slice(0,10))}

/* ---- MEMORY MATCH ---- */
function match(){
 const t=rnd(TERMS).slice(0,6);
 const cards=rnd(t.flatMap((x,i)=>[{i,h:x[1]},{i,h:x[2]}]));
 M={open:[],done:0,tries:0,t0:Date.now(),lock:false};
 app.innerHTML=`<div class=card><h2>Memory Match</h2><p>Match each term with its definition.</p><p id=mi>Attempts: 0</p>
 <div class=grid>${cards.map(c=>`<div class=cardf data-i=${c.i} onclick=flip(this)><div class=in><div class=fr>?</div><div class=bk>${c.h}</div></div></div>`).join("")}</div>
 <button class="btn alt" onclick=menu()>Back</button></div>`}
function flip(el){
 if(M.lock||el.classList.contains("on")||el.classList.contains("done"))return;
 el.classList.add("on");M.open.push(el);beep(440);
 if(M.open.length<2)return;
 M.tries++;$("#mi").textContent="Attempts: "+M.tries;
 const [a,b]=M.open;M.open=[];
 if(a.dataset.i===b.dataset.i){
  [a,b].forEach(x=>{x.classList.remove("on");x.classList.add("done")});beep(780);M.done++;
  if(M.done===6)matchEnd()}
 else{M.lock=true;setTimeout(()=>{a.classList.remove("on");b.classList.remove("on");M.lock=false},900)}}
function matchEnd(){
 const sec=Math.round((Date.now()-M.t0)/1000),mm=Math.round(6/M.tries*100);
 S.ret.mm=mm;S.games++;save();const rs=retScore();
 app.innerHTML=`<div class=card><h2>🎉 All pairs matched!</h2><p>Attempts: <b>${M.tries}</b> • Time: <b>${sec}s</b><br>Memory Match score: <b>${mm}%</b></p>
 <p>Retention Score: <b>${rs}%</b><br>${retMsg(rs)}</p>
 <button class=btn onclick="start(LC)">PLAY AGAIN</button><button class="btn alt" onclick=menu()>BACK TO MENU</button></div>`}

/* ---- RETENTION CHALLENGE: study 15 seconds, then recall ---- */
function retStudy(){
 RC={t:rnd(TERMS).slice(0,6)};let s=15;
 app.innerHTML=`<div class=card><h2>Memorize! <span id=tm>15</span>s</h2>${RC.t.map(x=>`<p><b>${x[1]}</b> → ${x[2]}</p>`).join("")}<button class=btn onclick=retQuiz()>I'm ready</button></div>`;
 RC.iv=setInterval(()=>{s--;const e=$("#tm");if(!e){clearInterval(RC.iv)}else if(s<=0){retQuiz()}else e.textContent=s},1000)}
function retQuiz(){
 clearInterval(RC.iv);
 const list=RC.t.map(x=>({cat:x[0],category:CATS[x[0]],difficulty:"Retention",type:"mc",
  question:`Which term matches this definition: "${x[2]}"?`,answer:x[1],
  choices:[x[1],...rnd(TERMS.filter(y=>y!==x)).slice(0,3).map(y=>y[1])],explanation:`${x[1]}: ${x[2]}.`}));
 newG({cat:-1,diff:"Any",mode:"ret"},list)}

/* ---- REVIEW / PROGRESS / SETTINGS ---- */
function review(){
 app.innerHTML=`<div class=card><h2>Review Mistakes</h2>${S.wrong.length?S.wrong.map(w=>`<div class=rv><b>${w.question}</b><br>Your answer: ${w.mine}<br>Correct: <b>${w.answer}</b><br><i>${w.explanation}</i></div>`).join(""):"<p>No mistakes saved. 🎉</p>"}
 ${S.wrong.length?"<button class=btn onclick=practiceWrong()>PRACTICE THESE QUESTIONS</button>":""}<button class="btn alt" onclick=menu()>Back</button></div>`}
function progress(){
 const w=extremes(S.prog)[1],rs=retScore();
 app.innerHTML=`<div class=card><h2>Progress</h2>
 ${S.prog.map((p,i)=>`<div>${CATS[i]} — <b>${pct(p)}%</b></div><div class=bar><i style="width:0" data-w="${pct(p)}"></i></div>`).join("")}
 <p>Games played: <b>${S.games}</b> • Highest score: <b>${S.high}</b> • Best accuracy: <b>${S.bestAcc}%</b><br>Retention Score: <b>${rs}%</b> — ${retMsg(rs)}</p>
 ${w>=0?`<p><b>Your weakest area:</b> ${CATS[w]} – ${pct(S.prog[w])}%<br><i>Review basic concepts and practice more questions in this category.</i></p><button class=btn onclick="start({cat:${w},diff:'Any',mode:'start'})">PRACTICE WEAK AREA</button>`:"<p>Play some games to see your weak areas.</p>"}
 <button class="btn alt" onclick=menu()>Back</button></div>`;
 setTimeout(()=>document.querySelectorAll(".bar i").forEach(i=>i.style.width=i.dataset.w+"%"),50)}
function settings(){
 app.innerHTML=`<div class=card><h2>Settings</h2><label>Player name</label><input id=nm value="${S.name}" maxlength=20>
 <button class=btn onclick="S.name=$('#nm').value.trim();save();settings()">Save name</button>
 <button class=btn onclick="S.sound=!S.sound;save();settings()">Sound: ${S.sound?"ON 🔊":"OFF 🔇"}</button>
 <button class=btn style="background:#e74c3c;color:#fff" onclick="if(confirm('Erase all progress?')){S=JSON.parse(JSON.stringify(DEF));save();menu()}">RESET PROGRESS</button>
 <button class="btn alt" onclick=menu()>Back</button></div>`}
menu();
