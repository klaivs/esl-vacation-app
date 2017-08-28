/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './login-form.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/router';
import * as i4 from '@angular/common';
import * as i5 from '../../../../src/app/login/login-form.component';
import * as i6 from '../../../../src/app/datastore/user/user.service';
import * as i7 from '../../../../src/app/msg/msg.service';
const styles_LoginFormComponent:any[] = [i0.styles];
export const RenderType_LoginFormComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LoginFormComponent,data:{}});
function View_LoginFormComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),45,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      42,'form',[['class','form-inline'],['id','loginForm'],['novalidate','']],[[2,
          'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
          (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
          [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
          'ngSubmit'],[(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,4).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,4).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.onSubmit()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i1.ɵdid(16384,[['loginForm',4]],0,i2.NgForm,[[8,
      (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
      (null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i1.ɵdid(16384,(null as any),
      0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),(null as any)),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),14,'div',[['class','form-group']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'label',
          [['for','username']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Username'])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'input',
          [['class','form-control'],['id','username'],['name','username'],['required',
              ''],['type','text']],[[1,'required',0],[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,14)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,14).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,14)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,14)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.username = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i1.ɵdid(671744,[['name',4]],0,i2.NgModel,[[2,
          i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i1.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),14,'div',[['class','form-group']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['    \n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'label',
          [['for','password']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Password'])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'input',
          [['class','form-control'],['id','password'],['name','password'],['required',
              ''],['type','password']],[[1,'required',0],[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,30)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,30).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,30)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,30)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.password = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i1.ɵdid(671744,[['pname',4]],0,i2.NgModel,[[2,
          i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i1.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵted((null as any),['\n      \n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-success btn-xs'],['id','btnLoginSubmit'],
              ['type','submit']],[[8,'disabled',0]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Login'])),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'span',[['aria-hidden',
          'true'],['class','glyphicon glyphicon-info-sign'],['title','Try \'f1\' or \'test\' as username and password!']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_15:any = '';
        _ck(_v,15,0,currVal_15);
        const currVal_16:any = 'username';
        const currVal_17:any = _co.username;
        _ck(_v,18,0,currVal_16,currVal_17);
        const currVal_26:any = '';
        _ck(_v,31,0,currVal_26);
        const currVal_27:any = 'password';
        const currVal_28:any = _co.password;
        _ck(_v,34,0,currVal_27,currVal_28);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,6).ngClassUntouched;
        const currVal_1:any = i1.ɵnov(_v,6).ngClassTouched;
        const currVal_2:any = i1.ɵnov(_v,6).ngClassPristine;
        const currVal_3:any = i1.ɵnov(_v,6).ngClassDirty;
        const currVal_4:any = i1.ɵnov(_v,6).ngClassValid;
        const currVal_5:any = i1.ɵnov(_v,6).ngClassInvalid;
        const currVal_6:any = i1.ɵnov(_v,6).ngClassPending;
        _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_7:any = (i1.ɵnov(_v,15).required? '': (null as any));
        const currVal_8:any = i1.ɵnov(_v,20).ngClassUntouched;
        const currVal_9:any = i1.ɵnov(_v,20).ngClassTouched;
        const currVal_10:any = i1.ɵnov(_v,20).ngClassPristine;
        const currVal_11:any = i1.ɵnov(_v,20).ngClassDirty;
        const currVal_12:any = i1.ɵnov(_v,20).ngClassValid;
        const currVal_13:any = i1.ɵnov(_v,20).ngClassInvalid;
        const currVal_14:any = i1.ɵnov(_v,20).ngClassPending;
        _ck(_v,13,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,
            currVal_13,currVal_14);
        const currVal_18:any = (i1.ɵnov(_v,31).required? '': (null as any));
        const currVal_19:any = i1.ɵnov(_v,36).ngClassUntouched;
        const currVal_20:any = i1.ɵnov(_v,36).ngClassTouched;
        const currVal_21:any = i1.ɵnov(_v,36).ngClassPristine;
        const currVal_22:any = i1.ɵnov(_v,36).ngClassDirty;
        const currVal_23:any = i1.ɵnov(_v,36).ngClassValid;
        const currVal_24:any = i1.ɵnov(_v,36).ngClassInvalid;
        const currVal_25:any = i1.ɵnov(_v,36).ngClassPending;
        _ck(_v,29,0,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,
            currVal_24,currVal_25);
        const currVal_29:boolean = !i1.ɵnov(_v,4).form.valid;
        _ck(_v,40,0,currVal_29);
      });
}
function View_LoginFormComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),11,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      1,'span',[['id','user_actions']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['Hello ',' ','!'])),(_l()(),i1.ɵted((null as any),
      ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'a',[['routerLink',
      '/user-settings']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,
      en,$event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,6).onClick($event.button,$event.ctrlKey,$event.metaKey,
          $event.shiftKey)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i3.RouterLinkWithHref,
      [i3.Router,i3.ActivatedRoute,i4.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'span',[['aria-hidden',
      'true'],['class','glyphicon glyphicon-cog'],['title','Settings']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.userService.logout()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      0,'span',[['aria-hidden','true'],['class','glyphicon glyphicon-log-out'],['title',
          'Logout']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    const currVal_4:any = '/user-settings';
    _ck(_v,6,0,currVal_4);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.userService.getLoggedInUser().firstname;
    const currVal_1:any = _co.userService.getLoggedInUser().lastname;
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_2:any = i1.ɵnov(_v,6).target;
    const currVal_3:any = i1.ɵnov(_v,6).href;
    _ck(_v,5,0,currVal_2,currVal_3);
  });
}
export function View_LoginFormComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_LoginFormComponent_1)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_LoginFormComponent_2)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n']))],(_ck,_v) => {
    var _co:i5.LoginFormComponent = _v.component;
    const currVal_0:boolean = !_co.userService.getLoggedInUser();
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _co.userService.getLoggedInUser();
    _ck(_v,4,0,currVal_1);
  },(null as any));
}
export function View_LoginFormComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'login-form',([] as any[]),
      (null as any),(null as any),(null as any),View_LoginFormComponent_0,RenderType_LoginFormComponent)),
      i1.ɵdid(114688,(null as any),0,i5.LoginFormComponent,[i6.UserService,i7.MsgService],
          (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const LoginFormComponentNgFactory:i1.ComponentFactory<i5.LoginFormComponent> = i1.ɵccf('login-form',
    i5.LoginFormComponent,View_LoginFormComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMva2JydW5zL2dpdGh1Yl9yZXBvcy9FU0xfdmFjYXRpb25zL3NyYy9hcHAvbG9naW4vbG9naW4tZm9ybS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMva2JydW5zL2dpdGh1Yl9yZXBvcy9FU0xfdmFjYXRpb25zL3NyYy9hcHAvbG9naW4vbG9naW4tZm9ybS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9rYnJ1bnMvZ2l0aHViX3JlcG9zL0VTTF92YWNhdGlvbnMvc3JjL2FwcC9sb2dpbi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMva2JydW5zL2dpdGh1Yl9yZXBvcy9FU0xfdmFjYXRpb25zL3NyYy9hcHAvbG9naW4vbG9naW4tZm9ybS5jb21wb25lbnQudHMuTG9naW5Gb3JtQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiAqbmdJZj1cIiF1c2VyU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKVwiPlxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmVcIiAjbG9naW5Gb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBpZD1cImxvZ2luRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgI25hbWU9XCJuZ01vZGVsXCI+XG4gICAgICAgIDwhLS1kaXYgW2hpZGRlbl09XCJuYW1lLnZhbGlkIHx8IG5hbWUucHJpc3RpbmVcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgIFVzZXJuYW1lIGlzIHJlcXVpcmVkIVxuICAgICAgICA8L2Rpdi0tPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICBcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiICNwbmFtZT1cIm5nTW9kZWxcIj5cbiAgICAgICAgPCEtLWRpdiBbaGlkZGVuXT1cInBuYW1lLnZhbGlkIHx8IHBuYW1lLnByaXN0aW5lXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICBQYXNzd29yZCBpcyByZXF1aXJlZCFcbiAgICAgICAgPC9kaXYtLT5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4teHNcIiBbZGlzYWJsZWRdPVwiIWxvZ2luRm9ybS5mb3JtLnZhbGlkXCIgaWQ9XCJidG5Mb2dpblN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24taW5mby1zaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9XCJUcnkgJ2YxJyBvciAndGVzdCcgYXMgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIVwiPjwvc3Bhbj5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJ1c2VyU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKVwiPlxuICA8c3BhbiBpZD1cInVzZXJfYWN0aW9uc1wiPkhlbGxvIHt7dXNlclNlcnZpY2UuZ2V0TG9nZ2VkSW5Vc2VyKCkuZmlyc3RuYW1lfX0ge3t1c2VyU2VydmljZS5nZXRMb2dnZWRJblVzZXIoKS5sYXN0bmFtZX19ITwvc3Bhbj5cbiAgPGEgcm91dGVyTGluaz1cIi91c2VyLXNldHRpbmdzXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPVwiU2V0dGluZ3NcIj48L3NwYW4+PC9hPlxuICA8YSAoY2xpY2spPVwidXNlclNlcnZpY2UubG9nb3V0KClcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPVwiTG9nb3V0XCI+PC9zcGFuPjwvYT5cbjwvZGl2PlxuIiwiPGxvZ2luLWZvcm0+PC9sb2dpbi1mb3JtPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUEsd0VBQTRDO2FBQUEsNEJBQ3hDO01BQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQThDO1VBQUE7VUFBQTtRQUFBO1FBQTlDO01BQUEsdUNBQUE7TUFBQSxvQ0FBQTtNQUFBLDhFQUFBO01BQUEsb0VBQUE7TUFBQTtNQUFxRiw2Q0FDbkY7VUFBQTtVQUFBLDRDQUF3QjtVQUFBLGlCQUN0QjtVQUFBO1VBQUEsZ0JBQXNCLDZDQUFnQjtVQUFBLGlCQUN0QztVQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUErRDtjQUFBO2NBQUE7WUFBQTtZQUEvRDtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLGdEQUFBO1VBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtVQUFBLG9DQUFBOzZCQUFBO1VBQUEscUVBQUE7VUFBQSw4REFBQTtVQUFBLGlFQUFzSDtpQkFBQSxnQ0FHOUc7TUFDSiw2Q0FDTjtVQUFBO1VBQUEsNENBQXdCO1VBQUEscUJBQ3RCO1VBQUE7VUFBQSxnQkFBc0IsNkNBQWdCO1VBQUEsaUJBQ3RDO1VBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQW1FO2NBQUE7Y0FBQTtZQUFBO1lBQW5FO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsZ0RBQUE7VUFBQTtZQUFBO1VBQUE7VUFBQTtZQUFBO1VBQUEsb0NBQUE7NkJBQUE7VUFBQSxxRUFBQTtVQUFBLDhEQUFBO1VBQUEsaUVBQTJIO2lCQUFBLGdDQUduSDtNQUNKLHFEQUVOO1VBQUE7Y0FBQTtVQUFBLGdCQUE0RywwQ0FBYztVQUFBLGVBQzFIO1VBQUE7VUFBQTtNQUEySCwyQ0FDdEg7OztRQWZtRDtRQUF0RCxZQUFzRCxVQUF0RDtRQUFzRjtRQUF2QjtRQUEvRCxZQUFzRixXQUF2QixVQUEvRDtRQU8wRDtRQUExRCxZQUEwRCxVQUExRDtRQUEwRjtRQUF2QjtRQUFuRSxZQUEwRixXQUF2QixVQUFuRTs7UUFWSjtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEscUVBQUE7UUFHSTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQSxVQUFBO1lBQUEscUJBQUE7UUFPQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQSxXQUFBO1lBQUEscUJBQUE7UUFNbUQ7UUFBckQsWUFBcUQsVUFBckQ7Ozs7b0JBSU47TUFBQSx3RUFBMkM7YUFBQSwwQkFDekM7TUFBQTtNQUFBLGdCQUF3QixtREFBb0c7TUFBQSxXQUM1SDtNQUFBO2VBQUE7SUFBQTtJQUFBO01BQUE7VUFBQTtNQUFBO0lBQUE7SUFBQTtFQUFBLHVDQUFBO01BQUE7TUFBQSxlQUErQjtNQUFBO01BQUEsMERBQXFGO01BQUEsV0FDcEg7TUFBQTtRQUFBO1FBQUE7UUFBRztVQUFBO1VBQUE7UUFBQTtRQUFIO01BQUEsZ0NBQWtDO01BQUE7VUFBQTtNQUF1RjtJQUR0SDtJQUFILFdBQUcsU0FBSDs7O0lBRHdCO0lBQUE7SUFBQTtJQUN4QjtJQUFBO0lBQUEsV0FBQSxtQkFBQTs7OztvQkF2QkY7TUFBQSxtQ0FBQTtvQkFBQSxtQ0FvQk07TUFBQSxTQUNOO01BQUEsbUNBQUE7b0JBQUEsbUNBSU07TUFBQTs7SUF6QkQ7SUFBTCxXQUFLLFNBQUw7SUFxQks7SUFBTCxXQUFLLFNBQUw7Ozs7b0JDckJBO01BQUE7YUFBQTtVQUFBO0lBQUE7Ozs7In0=