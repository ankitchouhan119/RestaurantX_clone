import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex318Cb, useFlex316Cb, useFlex317Cb, useButton43Cb, useButton44Cb, useLink19Cb, useLink20Cb, useLink21Cb, useLink22Cb, useLink23Cb, useImage124Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
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

  const Flex318Props = useStore((state)=>state["Menu"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Menu"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex316Props = useStore((state)=>state["Menu"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Menu"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex317Props = useStore((state)=>state["Menu"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Menu"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Button43Props = useStore((state)=>state["Menu"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["Menu"]["Button43"]);
const Button43Cb = useButton43Cb()
const Button44Props = useStore((state)=>state["Menu"]["Button44"]);
const Button44IoProps = useIoStore((state)=>state["Menu"]["Button44"]);
const Button44Cb = useButton44Cb()
const Link19Props = useStore((state)=>state["Menu"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["Menu"]["Link19"]);
const Link19Cb = useLink19Cb()
const Link20Props = useStore((state)=>state["Menu"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["Menu"]["Link20"]);
const Link20Cb = useLink20Cb()
const Link21Props = useStore((state)=>state["Menu"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["Menu"]["Link21"]);
const Link21Cb = useLink21Cb()
const Link22Props = useStore((state)=>state["Menu"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["Menu"]["Link22"]);
const Link22Cb = useLink22Cb()
const Link23Props = useStore((state)=>state["Menu"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["Menu"]["Link23"]);
const Link23Cb = useLink23Cb()
const Image124Props = useStore((state)=>state["Menu"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Menu"]["Image124"]);
const Image124Cb = useImage124Cb()

  return (<>
  <Flex2 className="p-Menu Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Flex2 className="p-Menu Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Image2 className="p-Menu Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<Link2 className="p-Menu Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
<Link2 className="p-Menu Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
<Link2 className="p-Menu Link21 bpt" {...Link21Props} {...Link21Cb} {...Link21IoProps}/>
<Link2 className="p-Menu Link22 bpt" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
<Link2 className="p-Menu Link23 bpt" {...Link23Props} {...Link23Cb} {...Link23IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Button2 className="p-Menu Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<Button2 className="p-Menu Button44 bpt" {...Button44Props} {...Button44Cb} {...Button44IoProps}/>
</Flex2>
</Flex2>
  </>);
}
