import { Observable } from 'rxjs/Observable';
import { PartialObserver } from 'rxjs/Observer';

const addItem = (val: string) => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
};

const observable = Observable.create((observer: PartialObserver<string>) => {
  try {
    observer.next('Hello');
    setInterval(() => observer.next('How are you?'), 2000);
  } catch (error) {
    observer.error(error);
  }
});

const observer = observable.subscribe(
  (success: string) => addItem(success),
  (error: string) => addItem(error),
  () => addItem('Completed')
);

const observer2 = observable.subscribe((success: string) => addItem(success));

setTimeout(() => observer.unsubscribe(), 6001);
