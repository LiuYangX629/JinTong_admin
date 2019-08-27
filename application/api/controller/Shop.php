<?php


namespace app\api\controller;


use app\model\ShopModel;
use think\controller\Rest;
class Shop extends Rest
{
    public function shop(){
        //判断当前请求方法
        switch ($this->method){
            case "get":return $this->get();
            case "post":return $this->post();
            case "put":return $this->put();
            case "delete":return $this->delete();
        }
    }

    private function get(){
        return "get";
    }
    private function post(){
        $data=input("post.");
        $obj=new ShopModel;
        if(!isset($data["name"])){
            return json(["msg"=>"请提交店铺名称","code"=>401]);
        }
        $res=$obj->where("name",$data["name"])->find();
        if(isset($res)){
            if($res->state===1){
                return json(["msg"=>"当前店铺正在背审核","code"=>402]);
            }else{
                return json(["msg"=>"当前店铺审核已通过,请根据管理员提供的账号密码进行登录","code"=>403]);
            }
        }
        $r=$obj->allowField(true)->save($data);
        if($r){
            return json(["msg"=>"提交成功","code"=>200]);
        }else{
            return json(["msg"=>"提交失败","code"=>400]);

        }
    }
    private function put(){

    }
    private function delete(){

    }

}