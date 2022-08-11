<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreproductRequest;
use App\Http\Requests\UpdateproductRequest;
use App\Models\product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //recupere all product in database
        $products = product::all();
        return response()->json($products);
    }

    public function getOne($id){
        $product = product::find($id);
        if (is_null($product)) {
            return response()->json(['message'=>"le produit n'as pas ete trouver"],404);
        }
        return response()->json([$product]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //create a new product
        try {
            $product =new product();//::create($request->all());
            $product->name=$request->name;
            $product->description = $request->description;
            $product->qty = $request->qty;
            $product->price = $request->price;
            $product->save();
            return response()->json([$product,'message'=>"produit creeer avec succees"]);
        } catch (\Throwable $th) {
            return response()->json(['message'=>"une ereur est surn=venue lors de la creation du produit",$th]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreproductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreproductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateproductRequest  $request
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {

        //to update a specific product
        $product = product::find($request->id);
        if (is_null($product)) {
            return response()->json(['message'=>"Produit est introuvable"],404);
        }
        // return $request->all();
        // $product->name = $request->name;
        $product->update($request->all());
        // return $product->description; 
        return response()->json(['message'=>"produit mis a jour avec avec success"],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //to update a specific product
        $product = product::find($id);
        if (is_null($product)) {
            return response()->json(['message'=>"Produit est introuvable"],303);
        }

        $product->delete();
        return response()->json(['message'=>"produit suprimer avec success"],201);

    }
}
// 5
// 1
// 0
// 5
// 3
// 6
// 0
// 22
