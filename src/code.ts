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
    observer.complete();
    observer.next('will not send');
  } catch (error) {
    observer.error(error);
  }
});

observable.subscribe(
  (success: string) => addItem(success),
  (error: string) => addItem(error),
  () => addItem('Completed')
);
