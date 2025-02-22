export const debounce = <T extends (...args: any[])=>void>(func: T, delay:number)=>{
    let timerId: NodeJS.Timeout | undefined;
    return (...args: Parameters<T>): void=>{
        if(timerId) clearTimeout(timerId);

        timerId = setTimeout(()=>{
            func(...args);
        },delay)
    }
}