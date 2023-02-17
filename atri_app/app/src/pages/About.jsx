import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex315Cb, useFlex313Cb, useFlex314Cb, useButton41Cb, useButton42Cb, useLink14Cb, useLink15Cb, useLink16Cb, useLink17Cb, useLink18Cb, useImage123Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex315Props = useStore((state)=>state["about"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["about"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex313Props = useStore((state)=>state["about"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["about"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex314Props = useStore((state)=>state["about"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["about"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Button41Props = useStore((state)=>state["about"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["about"]["Button41"]);
const Button41Cb = useButton41Cb()
const Button42Props = useStore((state)=>state["about"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["about"]["Button42"]);
const Button42Cb = useButton42Cb()
const Link14Props = useStore((state)=>state["about"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["about"]["Link14"]);
const Link14Cb = useLink14Cb()
const Link15Props = useStore((state)=>state["about"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["about"]["Link15"]);
const Link15Cb = useLink15Cb()
const Link16Props = useStore((state)=>state["about"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["about"]["Link16"]);
const Link16Cb = useLink16Cb()
const Link17Props = useStore((state)=>state["about"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["about"]["Link17"]);
const Link17Cb = useLink17Cb()
const Link18Props = useStore((state)=>state["about"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["about"]["Link18"]);
const Link18Cb = useLink18Cb()
const Image123Props = useStore((state)=>state["about"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["about"]["Image123"]);
const Image123Cb = useImage123Cb()

  return (<>
  <Flex1 className="p-about Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex1 className="p-about Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Image1 className="p-about Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<Link1 className="p-about Link14 bpt" {...Link14Props} {...Link14Cb} {...Link14IoProps}/>
<Link1 className="p-about Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<Link1 className="p-about Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
<Link1 className="p-about Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<Link1 className="p-about Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
</Flex1>
<Flex1 className="p-about Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Button1 className="p-about Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
<Button1 className="p-about Button42 bpt" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
</Flex1>
</Flex1>
  </>);
}
