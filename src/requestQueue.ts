/**
 * queue:请求队列；
 * maxReqNum：最大并发数；
 * curActiveCount：正在请求的数量
 */

export class RequestQueue {
    queue: any[];
    maxReqNum: number;
    curActiveCount: number;
    constructor(maxReqNum: number) {
        this.maxReqNum = maxReqNum;
        this.queue = [];
        this.curActiveCount = 0;
    }

    enqueue(req: any) {
        this.queue.push(req);
        this.run();
    }

    async run() {
        while (this.curActiveCount < this.maxReqNum && this.queue.length > 0) {
            const nextRequest = this.queue.shift(); // 获取队列中的下一个请求
            if (!nextRequest) break;

            this.curActiveCount++; // 增加活动请求数

            try {
                await nextRequest(); // 执行请求
            } catch (error) {
                console.error('Request failed:');
            } finally {
                this.curActiveCount--; // 请求完成后减少活动请求数
                this.run(); // 继续执行下一个请求
            }
        }
    }
}

export default RequestQueue;
