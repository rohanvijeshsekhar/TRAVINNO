import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{Et as t,a as n,f as r,m as i,r as a,t as o,u as s,wt as c}from"./vendor-BdU3jZAb.js";import{a as l,i as u}from"./vendor-framer-B7Atve8V.js";var d=e(t(),1),f=c(),p=[{id:1,title:`Senior Travel Consultant`,location:`Dubai, UAE`,type:`Full-Time`,description:`Help design premium leisure and corporate travel experiences for global clients.`,status:`Open`},{id:2,title:`Operations & Destination Coordinator`,location:`Cochin, India`,type:`Full-Time`,description:`Coordinate ground logistics, hotel contracts, and transit operations for luxury tours.`,status:`Open`},{id:3,title:`Luxury Travel Representative`,location:`Bangkok, Thailand`,type:`Contract`,description:`Deliver bespoke local guiding, transfer coordination, and VIP guest relations.`,status:`Open`}];function m(){let[e]=(0,d.useState)(p),[t,c]=(0,d.useState)(null),[m,h]=(0,d.useState)(!1),[g,_]=(0,d.useState)(null),[v,y]=(0,d.useState)(!1),[b,x]=(0,d.useState)({fullName:``,email:``,phone:``,coverLetter:``}),[S,C]=(0,d.useState)({}),w=e.filter(e=>e.status===`Open`);(0,d.useEffect)(()=>(m?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[m]),(0,d.useEffect)(()=>{let e=e=>{e.key===`Escape`&&m&&E()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[m]);let T=(e=null)=>{c(e),h(!0),y(!1),_(null),x({fullName:``,email:``,phone:``,coverLetter:``}),C({})},E=()=>{h(!1),c(null)},D=e=>{let t=e.target.files[0];t&&(t.size>5*1024*1024?(C(e=>({...e,file:`File exceeds the maximum size limit of 5MB.`})),_(null)):(_(t),C(e=>{let t={...e};return delete t.file,t})))},O=(e,t)=>{x(n=>({...n,[e]:t})),S[e]&&C(t=>{let n={...t};return delete n[e],n})},k=e=>{e.preventDefault();let t={};if(b.fullName.trim()||(t.fullName=`Full Name is required.`),b.email.trim()?/\S+@\S+\.\S+/.test(b.email)||(t.email=`Invalid email formatting.`):t.email=`Email Address is required.`,b.phone.trim()||(t.phone=`Phone Number is required.`),g||(t.file=`Please upload your CV/Resume.`),Object.keys(t).length>0){C(t);return}y(!0)},A={duration:.6,ease:[.16,1,.3,1]};return(0,f.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`},children:[(0,f.jsx)(`style`,{children:`
        /* Local Careers Section styling to keep index.css lean */
        .careers-container {
          position: relative; 
          zIndex: 2; 
          maxWidth: 1200px; 
          margin: 0 auto; 
          padding: 160px 24px 120px 24px; 
          boxSizing: border-box;
        }

        .job-card-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 48px;
        }

        .premium-job-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(245, 242, 236, 0.06);
          border-radius: 16px;
          padding: 36px 40px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .premium-job-card:hover {
          border-color: #C1121F;
          background-color: rgba(255, 255, 255, 0.03);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .job-card-info {
          flex: 0 0 300px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .job-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          color: rgba(245, 242, 236, 0.45);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-item svg {
          stroke-width: 2px;
        }

        .job-card-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 500;
          color: #F5F2EC;
          margin: 4px 0 0 0;
          letter-spacing: -0.2px;
        }

        .job-card-desc {
          flex: 1;
          font-family: var(--font-sans);
          font-size: 0.94rem;
          line-height: 1.65;
          color: rgba(245, 242, 236, 0.65);
          font-weight: 300;
          max-width: 480px;
        }

        .job-card-action {
          flex: 0 0 auto;
        }

        .premium-apply-btn {
          background: transparent;
          border: 1px solid rgba(245, 242, 236, 0.15);
          padding: 12px 28px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          color: #F5F2EC;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .premium-job-card:hover .premium-apply-btn {
          background-color: #C1121F;
          border-color: #C1121F;
          color: #F5F2EC;
          box-shadow: 0 4px 16px rgba(193, 18, 31, 0.25);
        }

        /* Form Inputs */
        .premium-input-field {
          background-color: rgba(255, 255, 255, 0.015) !important;
          border: 1px solid rgba(245, 242, 236, 0.08) !important;
          border-radius: 14px !important;
          color: #F5F2EC !important;
          font-family: var(--font-sans) !important;
          font-size: 0.98rem !important;
          padding: 16px 20px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
          outline: none !important;
        }

        .premium-input-field:focus {
          border-color: #C1121F !important;
          background-color: rgba(245, 242, 236, 0.02) !important;
          box-shadow: 0 0 16px rgba(193, 18, 31, 0.12) !important;
        }

        .premium-input-field::placeholder {
          color: rgba(245, 242, 236, 0.25) !important;
        }

        /* File Upload */
        .premium-file-upload {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 20px;
          background: rgba(255, 255, 255, 0.012);
          border: 1px dashed rgba(245, 242, 236, 0.15);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .premium-file-upload:hover {
          border-color: #C1121F;
          background-color: rgba(245, 242, 236, 0.015);
        }

        /* Glassmorphic Form Submit Button */
        .glassy-submit-btn {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(245, 242, 236, 0.1);
          padding: 16px 36px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: #F5F2EC;
          letter-spacing: 1.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          width: 100%;
        }

        .glassy-submit-btn:hover {
          background-color: rgba(193, 18, 31, 0.1);
          border-color: #C1121F;
          box-shadow: 0 6px 24px rgba(193, 18, 31, 0.25);
          transform: translateY(-1px);
        }

        /* Modal Overlay and Window */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-content {
          background-color: #0c0c0e;
          border: 1px solid rgba(245, 242, 236, 0.08);
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
          box-sizing: border-box;
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: rgba(245, 242, 236, 0.4);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .modal-close-btn:hover {
          color: #F5F2EC;
          transform: scale(1.1);
        }

        @media (max-width: 991px) {
          .premium-job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            padding: 30px;
          }
          .job-card-info {
            flex: none;
            width: 100%;
          }
          .job-card-desc {
            max-width: 100%;
          }
          .job-card-action {
            width: 100%;
          }
          .premium-apply-btn {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .modal-content {
            padding: 32px 24px;
          }
        }
      `}),(0,f.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,backgroundSize:`50px 50px`,backgroundRepeat:`repeat`,backgroundColor:`#050505`,zIndex:1,pointerEvents:`none`}}),(0,f.jsxs)(`div`,{className:`careers-container`,children:[(0,f.jsxs)(`section`,{style:{marginBottom:`64px`,position:`relative`},children:[(0,f.jsx)(u.span,{initial:{opacity:0,y:12},animate:{opacity:.45,y:0},transition:A,style:{display:`inline-block`,fontFamily:`var(--font-sans)`,fontSize:`0.75rem`,fontWeight:600,letterSpacing:`2px`,color:`rgba(245, 242, 236, 0.8)`,textTransform:`uppercase`,marginBottom:`16px`},children:`Careers`}),(0,f.jsxs)(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...A,delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2rem, 5vw, 3.5rem)`,fontWeight:400,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 24px 0`,textTransform:`uppercase`,letterSpacing:`-0.5px`},children:[`Build Extraordinary `,(0,f.jsx)(`br`,{}),`Journeys With Us`]}),(0,f.jsx)(u.p,{initial:{opacity:0},animate:{opacity:.75},transition:{...A,delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`Join a passionate team creating exceptional travel experiences across global destinations. At Travinno, every role contributes to unforgettable journeys.`})]}),(0,f.jsxs)(`section`,{style:{position:`relative`},children:[(0,f.jsx)(u.h2,{initial:{opacity:0,y:15},animate:{opacity:.55,y:0},transition:{...A,delay:.3},style:{fontFamily:`var(--font-sans)`,fontSize:`0.75rem`,fontWeight:600,letterSpacing:`2px`,color:`rgba(245, 242, 236, 0.8)`,textTransform:`uppercase`,borderBottom:`1px solid rgba(245, 242, 236, 0.08)`,paddingBottom:`16px`,margin:`0 0 32px 0`},children:`Available Opportunities`}),w.length>0?(0,f.jsx)(`div`,{className:`job-card-grid`,children:w.map((e,t)=>(0,f.jsxs)(u.div,{className:`premium-job-card`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{...A,delay:.3+t*.1},children:[(0,f.jsxs)(`div`,{className:`job-card-info`,children:[(0,f.jsxs)(`div`,{className:`job-card-meta`,children:[(0,f.jsxs)(`div`,{className:`meta-item`,children:[(0,f.jsx)(n,{size:13,style:{color:`#C1121F`}}),(0,f.jsx)(`span`,{children:e.location})]}),(0,f.jsx)(`span`,{children:`•`}),(0,f.jsxs)(`div`,{className:`meta-item`,children:[(0,f.jsx)(r,{size:13,style:{color:`rgba(245, 242, 236, 0.5)`}}),(0,f.jsx)(`span`,{children:e.type})]})]}),(0,f.jsx)(`h3`,{className:`job-card-title`,children:e.title})]}),(0,f.jsx)(`p`,{className:`job-card-desc`,children:e.description}),(0,f.jsx)(`div`,{className:`job-card-action`,children:(0,f.jsxs)(`button`,{onClick:()=>T(e),className:`premium-apply-btn`,children:[`Apply Now `,(0,f.jsx)(i,{size:13})]})})]},e.id))}):(0,f.jsxs)(u.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{...A,delay:.3},style:{textAlign:`center`,padding:`80px 40px`,border:`1px solid rgba(245, 242, 236, 0.06)`,borderRadius:`20px`,background:`rgba(255, 255, 255, 0.005)`},children:[(0,f.jsx)(`h3`,{style:{fontFamily:`var(--font-heading)`,fontSize:`1.8rem`,fontWeight:500,margin:`0 0 12px 0`,color:`#F5F2EC`},children:`No Current Openings`}),(0,f.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.96rem`,color:`rgba(245, 242, 236, 0.55)`,margin:`0 0 32px 0`,fontWeight:300},children:`We’re always looking for exceptional talent. Check back soon for future opportunities.`}),(0,f.jsxs)(`button`,{onClick:()=>T(null),className:`premium-apply-btn`,style:{margin:`0 auto`},children:[`Send Your Resume `,(0,f.jsx)(i,{size:13})]})]})]})]}),(0,f.jsx)(l,{children:m&&(0,f.jsx)(`div`,{className:`modal-overlay`,onClick:E,children:(0,f.jsxs)(u.div,{className:`modal-content`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:15},transition:{duration:.4,ease:[.16,1,.3,1]},onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`button`,{className:`modal-close-btn`,onClick:E,"aria-label":`Close Modal`,children:(0,f.jsx)(o,{size:20})}),v?(0,f.jsxs)(u.div,{initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},style:{textAlign:`center`,padding:`30px 10px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`20px`},children:[(0,f.jsx)(s,{size:56,style:{color:`#C1121F`}}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`1.8rem`,fontWeight:500,color:`#F5F2EC`,margin:`0 0 10px 0`},children:`Application Received`}),(0,f.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.94rem`,color:`rgba(245, 242, 236, 0.65)`,lineHeight:1.6,maxWidth:`380px`,margin:`0 auto`,fontWeight:300},children:`Thank you for applying. A member of our luxury coordination team will review your CV and be in touch soon.`})]}),(0,f.jsx)(`button`,{onClick:E,className:`premium-apply-btn`,style:{marginTop:`12px`},children:`Close Window`})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{style:{marginBottom:`32px`},children:[(0,f.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1px`,color:`rgba(245, 242, 236, 0.4)`,textTransform:`uppercase`},children:t?`Applying for`:`Submit Your Application`}),(0,f.jsx)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`1.8rem`,fontWeight:500,color:`#F5F2EC`,margin:`4px 0 0 0`},children:t?t.title:`General Application`})]}),(0,f.jsxs)(`form`,{onSubmit:k,style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Position Applied For`}),(0,f.jsx)(`input`,{type:`text`,className:`premium-input-field`,value:t?t.title:`General Application`,disabled:!0,style:{opacity:.6,cursor:`not-allowed`,backgroundColor:`rgba(255, 255, 255, 0.005) !important`}})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Full Name *`}),(0,f.jsx)(`input`,{type:`text`,placeholder:`e.g. Alexander Mercer`,className:`premium-input-field`,value:b.fullName,onChange:e=>O(`fullName`,e.target.value)}),S.fullName&&(0,f.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:S.fullName})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Email Address *`}),(0,f.jsx)(`input`,{type:`email`,placeholder:`alexander@mercer.com`,className:`premium-input-field`,value:b.email,onChange:e=>O(`email`,e.target.value)}),S.email&&(0,f.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:S.email})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Phone Number *`}),(0,f.jsx)(`input`,{type:`tel`,placeholder:`+971 50 123 4567`,className:`premium-input-field`,value:b.phone,onChange:e=>O(`phone`,e.target.value)}),S.phone&&(0,f.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:S.phone})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Upload CV / Resume *`}),(0,f.jsxs)(`label`,{className:`premium-file-upload`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`.pdf,.doc,.docx`,style:{display:`none`},onChange:D}),(0,f.jsx)(a,{size:18,style:{color:g?`#C1121F`:`rgba(245, 242, 236, 0.4)`}}),(0,f.jsx)(`span`,{style:{fontSize:`0.86rem`,color:g?`#F5F2EC`:`rgba(245, 242, 236, 0.6)`,fontWeight:500},children:g?g.name:`Select PDF, DOC, or DOCX`}),(0,f.jsx)(`span`,{style:{fontSize:`0.72rem`,color:`rgba(245, 242, 236, 0.3)`},children:`Max file size 5MB`})]}),S.file&&(0,f.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`,marginTop:`4px`},children:S.file})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,f.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Cover Letter (Optional)`}),(0,f.jsx)(`textarea`,{rows:4,placeholder:`Tell us why you want to design luxury travel experiences with us...`,className:`premium-input-field`,style:{resize:`vertical`,minHeight:`100px`},value:b.coverLetter,onChange:e=>O(`coverLetter`,e.target.value)})]}),(0,f.jsx)(`button`,{type:`submit`,className:`glassy-submit-btn`,style:{marginTop:`8px`},children:`Submit Application`})]})]})]})})})]})}export{m as default};