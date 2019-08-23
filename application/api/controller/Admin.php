<?php


namespace app\api\controller;


use app\model\AdminModel;
use think\captcha\Captcha;
use think\controller\Rest;

class Admin extends Rest
{
//    function createHash(){
//        return md5(time());
//    }
    function createPassword($pass,$hash){
        return md5(sha1($pass).$hash);
    }
    function captcha(){

        $config=[
            // 验证码字体大小
            'fontSize'    =>    30,
            // 验证码位数
            'length'      =>    4,
            // 关闭验证码杂点
            'useNoise'    =>    false,
        ];
        $captcha = new Captcha($config);
        return $captcha->entry();
    }
    function login(){
        $username=input("post.username");
        $password=input("post.password");
        $code=input("post.captcha");
        $captcha=new Captcha();
        if (!$captcha->check($code)){
            return json(["msg"=>"验证码错误","code"=>400]);
        }
        $r=AdminModel::where("username",$username)->find();
        if (isset($r)){
            $pass=$this->createPassword($password,$r->hash);
            if ($pass===$r->password){
                return json(["msg"=>"登录成功","code"=>200]);
            }
            return json(["msg"=>"登录失败","code"=>400]);
        }else{
            return json(["msg"=>"登录失败","code"=>400]);
        }
    }
    public function password(){
        $data=input("put.");//接受通过put提交的内容
        $r=AdminModel::where("username",$data['username'])->find();
        //根据用户名从模型中查找出当前这一条记录（对象/null）
        if(isset($r)){
            $pass=$this->createPassword($data["password"],$r->hash);//对于提交的原始密码进行加密
            if($pass===$r->password){
                $newpassword=$this->createPassword($data["newpassword1"],$r->hash);
                $res=$r->save(["password"=>$newpassword]);//进行更新操作
                if($res){
                    return json(["msg"=>"修改成功","code"=>200]);
                }else{
                    return json(["msg"=>"修改失败","code"=>400]);
                }
            }else{
                return json(["msg"=>"原始密码错误","code"=>400]);
            }
        }else{
            return json(["msg"=>"用户名错误","code"=>400]);
        }
    }
    public function manager(){
        //判断当前请求方法
        switch ($this->method){
            case "get":return $this->get();
            case "post":return $this->post();
            case "put":return $this->put();
            case "delete":return $this->delete();
        }
    }
    private function get(){
        $data=input("get.");
        $where=[];
        //添加过滤条件
        if(isset($data["role"])){
            $where["role"]=$data["role"];
        }
        if(isset($data["search"])&&$data["search"]!==""){
            $search=$data["search"];
            $where["username"]=["like","%$search%"];//模糊查询

        }
        //添加截取条件
        //通过模型查询数据
        if(isset($data["page"])&&isset($data["pageSize"])){
            $page=$data["page"];
            $pageSize=$data["pageSize"];
            $start=($page-1)*$pageSize;
            $r=AdminModel::where($where)->limit($start,$pageSize)->select();
            $total=AdminModel::where($where)->count();
            return json(["code"=>200,"msg"=>"获取成功","data"=>$r,"total"=>$total]);
        }
    }
    private function post(){

    }
    private function put(){
        $data=input("put.");
        if(isset($data["id"])){
            //通过id得到当前的一条记录（对象）
            $obj=AdminModel::get($data["id"]);
            //过滤非数据表中的字段然后进行更新返回受影响的行数
            $r=$obj->allowField(true)->save($data);
            if($r){
                return json(["msg"=>"修改成功","code"=>200]);
            }else{
                return json(["msg"=>"修改失败","code"=>400]);
            }
        }else{
            return json(["msg"=>"修改失败","code"=>400]);
        }
    }
    private function delete(){
        $data=input("get.");
        $r=AdminModel::destroy($data["id"]);
        if($r){
            return json(["msg"=>"删除成功","code"=>200]);
        }else{
            return json(["msg"=>"删除失败","code"=>400]);

        }
    }
}