(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1297],{46601:function(){},20713:function(t,e,r){"use strict";r.d(e,{a_:function(){return l},ih:function(){return w},iA:function(){return b},ot:function(){return o},Yp:function(){return X},gG:function(){return M},tA:function(){return L},WU:function(){return W},YL:function(){return m},xQ:function(){return n},ar:function(){return i},DX:function(){return k},oc:function(){return V},cW:function(){return Y},_b:function(){return z},qn:function(){return q}}),(d=l||(l={}))[d.MANTA_SEPOLIA=3441006]="MANTA_SEPOLIA",d[d.MAINNET=1]="MAINNET",(c=h||(h={})).ETHER="ETH",c.MATIC="MATIC",c.CELO="CELO",c.GNOSIS="XDAI",c.MOONBEAM="GLMR",c.BNB="BNB",c.AVAX="AVAX",l.MANTA_SEPOLIA,l.MAINNET;let n={[l.MANTA_SEPOLIA]:"0xFc6387f581d2A827F183A9ea68f07063F99744dE",[l.MAINNET]:"0xB2F57f26ef60f18d8f2F493Dbe7328bb4a987b28"},i={[l.MANTA_SEPOLIA]:"0xac822faA0Bb0B8E3a963d69B4d0E96254e61267E",[l.MAINNET]:"0x2F36E82686B007a11D82904b025cf92e8C0330b1"},o={[l.MANTA_SEPOLIA]:"0x18c06c368f6738faecf900cdbbdad62b3932d20a006f3785556208686a6f366c",[l.MAINNET]:"0x02cbbf145a2b81380c98407a4cc7da08174745f54fc8b144e8e653b5dbf85138"};n[l.MANTA_SEPOLIA],i[l.MANTA_SEPOLIA],n[l.MAINNET],i[l.MAINNET],l.MANTA_SEPOLIA,l.MAINNET;var a,u,s,d,c,l,h,m,f,A,N=r(40237),p=r.n(N);(a=m||(m={}))[a.EXACT_INPUT=0]="EXACT_INPUT",a[a.EXACT_OUTPUT=1]="EXACT_OUTPUT",(u=f||(f={}))[u.ROUND_DOWN=0]="ROUND_DOWN",u[u.ROUND_HALF_UP=1]="ROUND_HALF_UP",u[u.ROUND_UP=2]="ROUND_UP";let g=p().BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");var E=r(8797),I=r.n(E),y=r(3065),T=r(96635),_=r.n(T),v=r(6122),O=r.n(v);let F=_()(O()),D=_()(I());(s=A||(A={}))[s.RoundDown=0]="RoundDown",s[s.RoundHalfUp=1]="RoundHalfUp",s[s.RoundHalfEven=2]="RoundHalfEven",s[s.RoundUp=3]="RoundUp";let S={[f.ROUND_DOWN]:F.ROUND_DOWN,[f.ROUND_HALF_UP]:F.ROUND_HALF_UP,[f.ROUND_UP]:F.ROUND_UP},U={[f.ROUND_DOWN]:0,[f.ROUND_HALF_UP]:1,[f.ROUND_UP]:3};class b{static tryParseFraction(t){if(t instanceof p()||"number"==typeof t||"string"==typeof t)return new b(t);if("numerator"in t&&"denominator"in t)return t;throw Error("Could not parse fraction")}get quotient(){return p().divide(this.numerator,this.denominator)}get remainder(){return new b(p().remainder(this.numerator,this.denominator),this.denominator)}invert(){return new b(this.denominator,this.numerator)}add(t){let e=b.tryParseFraction(t);return p().equal(this.denominator,e.denominator)?new b(p().add(this.numerator,e.numerator),this.denominator):new b(p().add(p().multiply(this.numerator,e.denominator),p().multiply(e.numerator,this.denominator)),p().multiply(this.denominator,e.denominator))}subtract(t){let e=b.tryParseFraction(t);return p().equal(this.denominator,e.denominator)?new b(p().subtract(this.numerator,e.numerator),this.denominator):new b(p().subtract(p().multiply(this.numerator,e.denominator),p().multiply(e.numerator,this.denominator)),p().multiply(this.denominator,e.denominator))}lessThan(t){let e=b.tryParseFraction(t);return p().lessThan(p().multiply(this.numerator,e.denominator),p().multiply(e.numerator,this.denominator))}equalTo(t){let e=b.tryParseFraction(t);return p().equal(p().multiply(this.numerator,e.denominator),p().multiply(e.numerator,this.denominator))}greaterThan(t){let e=b.tryParseFraction(t);return p().greaterThan(p().multiply(this.numerator,e.denominator),p().multiply(e.numerator,this.denominator))}multiply(t){let e=b.tryParseFraction(t);return new b(p().multiply(this.numerator,e.numerator),p().multiply(this.denominator,e.denominator))}divide(t){let e=b.tryParseFraction(t);return new b(p().multiply(this.numerator,e.denominator),p().multiply(this.denominator,e.numerator))}toSignificant(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{groupSeparator:""},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.ROUND_HALF_UP;(0,y.Z)(Number.isInteger(t),"".concat(t," is not an integer.")),(0,y.Z)(t>0,"".concat(t," is not positive.")),F.set({precision:t+1,rounding:S[r]});let n=new F(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(t);return n.toFormat(n.decimalPlaces(),e)}toFixed(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{groupSeparator:""},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.ROUND_HALF_UP;return(0,y.Z)(Number.isInteger(t),"".concat(t," is not an integer.")),(0,y.Z)(t>=0,"".concat(t," is negative.")),D.DP=t,D.RM=U[r],new D(this.numerator.toString()).div(this.denominator.toString()).toFormat(t,e)}get asFraction(){return new b(this.numerator,this.denominator)}constructor(t,e=p().BigInt(1)){this.numerator=p().BigInt(t),this.denominator=p().BigInt(e)}}let C=_()(I());class w extends b{static fromRawAmount(t,e){return new w(t,e)}static fromFractionalAmount(t,e,r){return new w(t,e,r)}add(t){(0,y.Z)(this.currency.equals(t.currency),"CURRENCY");let e=super.add(t);return w.fromFractionalAmount(this.currency,e.numerator,e.denominator)}subtract(t){(0,y.Z)(this.currency.equals(t.currency),"CURRENCY");let e=super.subtract(t);return w.fromFractionalAmount(this.currency,e.numerator,e.denominator)}multiply(t){let e=super.multiply(t);return w.fromFractionalAmount(this.currency,e.numerator,e.denominator)}divide(t){let e=super.divide(t);return w.fromFractionalAmount(this.currency,e.numerator,e.denominator)}toSignificant(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.ROUND_DOWN;return super.divide(this.decimalScale).toSignificant(t,e,r)}toFixed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currency.decimals,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.ROUND_DOWN;return(0,y.Z)(t<=this.currency.decimals,"DECIMALS"),super.divide(this.decimalScale).toFixed(t,e,r)}toExact(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{groupSeparator:""};return C.DP=this.currency.decimals,new C(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(t)}get wrapped(){return this.currency.isToken?this:w.fromFractionalAmount(this.currency.wrapped,this.numerator,this.denominator)}constructor(t,e,r){super(e,r),(0,y.Z)(p().lessThanOrEqual(this.quotient,g),"AMOUNT"),this.currency=t,this.decimalScale=p().exponentiate(p().BigInt(10),p().BigInt(t.decimals))}}let P=new b(p().BigInt(100));function R(t){return new M(t.numerator,t.denominator)}class M extends b{add(t){return R(super.add(t))}subtract(t){return R(super.subtract(t))}multiply(t){return R(super.multiply(t))}divide(t){return R(super.divide(t))}toSignificant(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return super.multiply(P).toSignificant(t,e,r)}toFixed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return super.multiply(P).toFixed(t,e,r)}constructor(...t){super(...t),this.isPercent=!0}}class L extends b{invert(){return new L(this.quoteCurrency,this.baseCurrency,this.numerator,this.denominator)}multiply(t){(0,y.Z)(this.quoteCurrency.equals(t.baseCurrency),"TOKEN");let e=super.multiply(t);return new L(this.baseCurrency,t.quoteCurrency,e.denominator,e.numerator)}quote(t){(0,y.Z)(t.currency.equals(this.baseCurrency),"TOKEN");let e=super.multiply(t);return w.fromFractionalAmount(this.quoteCurrency,e.numerator,e.denominator)}get adjustedForDecimals(){return super.multiply(this.scalar)}toSignificant(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return this.adjustedForDecimals.toSignificant(t,e,r)}toFixed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return this.adjustedForDecimals.toFixed(t,e,r)}constructor(...t){let e,r,n,i;if(4===t.length)[e,r,n,i]=t;else{let o=t[0].quoteAmount.divide(t[0].baseAmount);[e,r,n,i]=[t[0].baseAmount.currency,t[0].quoteAmount.currency,o.denominator,o.numerator]}super(i,n),this.baseCurrency=e,this.quoteCurrency=r,this.scalar=new b(p().exponentiate(p().BigInt(10),p().BigInt(e.decimals)),p().exponentiate(p().BigInt(10),p().BigInt(r.decimals)))}}var B=r(61501),x=r(38);function q(t){try{return(0,x.Kn)(t)}catch(e){throw Error("".concat(t," is not a valid address."))}}let Z=/^0x[0-9a-fA-F]{40}$/;class H{constructor(t,e,r,n,i){(0,y.Z)(Number.isSafeInteger(t),"CHAIN_ID"),(0,y.Z)(e>=0&&e<255&&Number.isInteger(e),"DECIMALS"),this.chainId=t,this.decimals=e,this.symbol=r,this.name=n,this.logoUrl=i}}class W extends H{equals(t){return t.isToken&&this.chainId===t.chainId&&this.address.toLowerCase()===t.address.toLowerCase()}sortsBefore(t){return(0,y.Z)(this.chainId===t.chainId,"CHAIN_IDS"),(0,y.Z)(this.address.toLowerCase()!==t.address.toLowerCase(),"ADDRESSES"),this.address.toLowerCase()<t.address.toLowerCase()}get wrapped(){return this}constructor(t,e,r,n,i,o,a,u,s){super(t,r,n,i,o),this.isNative=!1,this.isToken=!0,a?this.address=function(t){if(Z.test(t))return t;throw Error("".concat(t," is not a valid address."))}(e):this.address=q(e),u&&(0,y.Z)(u.gte(B.O$.from(0)),"NON-NEGATIVE FOT FEES"),s&&(0,y.Z)(s.gte(B.O$.from(0)),"NON-NEGATIVE FOT FEES"),this.buyFeeBps=u,this.sellFeeBps=s}}class X extends H{constructor(...t){super(...t),this.isNative=!0,this.isToken=!1}}let k={[l.MANTA_SEPOLIA]:new W(l.MANTA_SEPOLIA,"0x199d1a27684106dC3Deb673115fc0fc9cf6af287",18,"WETH","Wrapped Ether v10"),[l.MAINNET]:new W(l.MAINNET,"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",18,"WETH","Wrapped Ether")};class G extends X{get wrapped(){let t=k[this.chainId];return(0,y.Z)(!!t,"WRAPPED"),t}static onChain(t){var e;return null!==(e=this._etherCache[t])&&void 0!==e?e:this._etherCache[t]=new G(t)}equals(t){return t.isNative&&t.chainId===this.chainId}constructor(t){super(t,18,"ETH","Ether")}}function V(t,e,r){let n=t.quote(e),i=n.subtract(r).divide(n);return new M(i.numerator,i.denominator)}function Y(t,e,r,n){if((0,y.Z)(r>0,"MAX_SIZE_ZERO"),(0,y.Z)(t.length<=r,"ITEMS_SIZE"),0===t.length)return t.push(e),null;{let i=t.length===r;if(i&&0>=n(t[t.length-1],e))return e;let o=0,a=t.length;for(;o<a;){let r=o+a>>>1;0>=n(t[r],e)?o=r+1:a=r}return t.splice(o,0,e),i?t.pop():null}}G._etherCache={};let j=p().BigInt(Number.MAX_SAFE_INTEGER),K=p().BigInt(0),$=p().BigInt(1),Q=p().BigInt(2);function z(t){let e,r;if((0,y.Z)(p().greaterThanOrEqual(t,K),"NEGATIVE"),p().lessThan(t,j))return p().BigInt(Math.floor(Math.sqrt(p().toNumber(t))));for(e=t,r=p().add(p().divide(t,Q),$);p().lessThan(r,e);)e=r,r=p().divide(p().add(p().divide(t,r),r),Q);return e}}}]);