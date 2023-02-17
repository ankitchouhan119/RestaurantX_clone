import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useButton43Cb() {
	const onClick = useCallback(callbackFactory("Button43", "Menu", "/Menu", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton44Cb() {
	const onClick = useCallback(callbackFactory("Button44", "Menu", "/Menu", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink19Cb() {

	return {  }
}
export function useLink20Cb() {

	return {  }
}
export function useLink21Cb() {

	return {  }
}
export function useLink22Cb() {

	return {  }
}
export function useLink23Cb() {

	return {  }
}
export function useImage124Cb() {
	const onClick = useCallback(callbackFactory("Image124", "Menu", "/Menu", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex316Cb() {
	const onClick = useCallback(callbackFactory("Flex316", "Menu", "/Menu", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex317Cb() {
	const onClick = useCallback(callbackFactory("Flex317", "Menu", "/Menu", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex318Cb() {
	const onClick = useCallback(callbackFactory("Flex318", "Menu", "/Menu", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}